import os
import re
import json
import time
import hashlib
import secrets
import datetime
import logging
import hmac
import random
import string
from functools import wraps
from typing import Any, Dict, List, Optional, Union, Callable, TypeVar, cast
from datetime import datetime, timedelta, timezone
from urllib.parse import urlparse, urlunparse, urljoin

import requests
from flask import jsonify, request, current_app
from requests.adapters import HTTPAdapter
from requests.packages.urllib3.util.retry import Retry

logger = logging.getLogger(__name__)

# Type variable for generic function return type
F = TypeVar('F', bound=Callable[..., Any])

def hash_api_key(api_key: str) -> str:
    """
    Securely hash an API key using HMAC-SHA256.
    
    Args:
        api_key: The API key to hash
        
    Returns:
        str: The hashed API key
    """
    secret = current_app.config.get('SECRET_KEY', 'dev-secret-change-me')
    return hmac.new(
        secret.encode('utf-8'),
        msg=api_key.encode('utf-8'),
        digestmod=hashlib.sha256
    ).hexdigest()

def generate_api_key(length: int = 32) -> str:
    """
    Generate a secure random API key.
    
    Args:
        length: Length of the API key in bytes (before hex encoding)
        
    Returns:
        str: A securely generated random API key
    """
    return secrets.token_hex(length // 2)

def generate_random_string(length: int = 16) -> str:
    """Generate a random string of fixed length."""
    chars = string.ascii_letters + string.digits
    return ''.join(secrets.choice(chars) for _ in range(length))

def is_valid_url(url: str) -> bool:
    """
    Check if a string is a valid URL.
    
    Args:
        url: The URL to validate
        
    Returns:
        bool: True if the URL is valid, False otherwise
    """
    try:
        result = urlparse(url)
        return all([result.scheme, result.netloc])
    except ValueError:
        return False

def sanitize_input(input_str: str, max_length: int = 255) -> str:
    """
    Sanitize and truncate user input.
    
    Args:
        input_str: The input string to sanitize
        max_length: Maximum allowed length of the string
        
    Returns:
        str: Sanitized string
    """
    if not input_str:
        return ""
    
    # Remove any null bytes
    sanitized = input_str.replace('\x00', '')
    
    # Truncate to max length
    return sanitized[:max_length]

def parse_tags(tags: Union[str, List[str], None]) -> List[str]:
    """
    Parse tags from various input formats into a list of strings.
    
    Args:
        tags: Tags as string (comma-separated) or list
        
    Returns:
        List[str]: List of sanitized tags
    """
    if not tags:
        return []
        
    if isinstance(tags, str):
        # Split comma-separated string and clean up
        tag_list = [tag.strip() for tag in tags.split(',') if tag.strip()]
    elif isinstance(tags, list):
        tag_list = [str(tag).strip() for tag in tags if tag and str(tag).strip()]
    else:
        return []
    
    # Sanitize each tag and remove duplicates while preserving order
    seen = set()
    return [tag for tag in tag_list if not (tag in seen or seen.add(tag))]

def format_timestamp(timestamp: Union[str, datetime, None], 
                    format_str: str = '%Y-%m-%dT%H:%M:%SZ') -> Optional[str]:
    """
    Format a timestamp to a string.
    
    Args:
        timestamp: The timestamp to format (can be string, datetime, or None)
        format_str: Format string for datetime
        
    Returns:
        Optional[str]: Formatted timestamp string or None if input is None
    """
    if not timestamp:
        return None
        
    if isinstance(timestamp, str):
        try:
            # Try to parse the string to datetime
            dt = datetime.fromisoformat(timestamp.replace('Z', '+00:00'))
            return dt.strftime(format_str)
        except (ValueError, AttributeError):
            return None
    elif isinstance(timestamp, datetime):
        return timestamp.strftime(format_str)
    
    return None

def json_serial(obj: Any) -> str:
    """JSON serializer for objects not serializable by default json code."""
    if isinstance(obj, (datetime, datetime.date)):
        return obj.isoformat()
    elif hasattr(obj, '__dict__'):
        return obj.__dict__
    raise TypeError(f"Type {type(obj)} not serializable")


def post_to_dict(post) -> Dict[str, Any]:
    """Convert a post row to dictionary.
    
    Args:
        post: A SQLite row or dictionary representing a post
        
    Returns:
        Dict[str, Any]: A dictionary representation of the post
    """
    return {
        'id': post['id'],
        'tunnel_url': post['tunnel_url'],
        'title': post['title'],
        'description': post['description'],
        'tags': post['tags'].split(',') if post['tags'] else [],
        'provider': post['provider'],
        'upvotes': post['upvotes'],
        'created_at': post['created_at'],
        'is_alive': bool(post['is_alive']) if 'is_alive' in post.keys() else True,
        'last_checked': post['last_checked'] if 'last_checked' in post.keys() else None,
        'failed_checks': post['failed_checks'] if 'failed_checks' in post.keys() else 0
    }

def to_json(data: Any, indent: Optional[int] = None) -> str:
    """
    Convert Python object to JSON string with proper serialization.
    
    Args:
        data: The data to convert to JSON
        indent: Indentation level for pretty-printing
        
    Returns:
        str: JSON string
    """
    return json.dumps(data, default=json_serial, indent=indent)

def create_retry_session(
    retries: int = 3,
    backoff_factor: float = 0.3,
    status_forcelist: tuple = (500, 502, 503, 504),
    session: Optional[requests.Session] = None
) -> requests.Session:
    """
    Create a requests session with retry logic.
    
    Args:
        retries: Number of retries
        backoff_factor: Backoff factor for retries
        status_forcelist: HTTP status codes to retry on
        session: Existing session to add retry to
        
    Returns:
        requests.Session: Configured session with retry
    """
    session = session or requests.Session()
    retry = Retry(
        total=retries,
        read=retries,
        connect=retries,
        backoff_factor=backoff_factor,
        status_forcelist=status_forcelist,
    )
    adapter = HTTPAdapter(max_retries=retry)
    session.mount('http://', adapter)
    session.mount('https://', adapter)
    return session

def rate_limit(limit: int, per: int = 60) -> Callable[[F], F]:
    """
    Decorator to implement rate limiting on a route.
    
    Args:
        limit: Number of requests allowed
        per: Time period in seconds
        
    Returns:
        Decorator function
    """
    def decorator(f: F) -> F:
        @wraps(f)
        def wrapper(*args: Any, **kwargs: Any) -> Any:
            # In a real implementation, you would use Redis or similar
            # to track rate limits across multiple workers
            return f(*args, **kwargs)
        return cast(F, wrapper)
    return decorator

def validate_json_content_type(f: F) -> F:
    """
    Decorator to ensure the request has JSON content type.
    
    Args:
        f: The route function to decorate
        
    Returns:
        Decorated function
    """
    @wraps(f)
    def wrapper(*args: Any, **kwargs: Any) -> Any:
        if not request.is_json:
            return jsonify({"error": "Content-Type must be application/json"}), 400
        return f(*args, **kwargs)
    return cast(F, wrapper)

def paginate_query(query, page: int = 1, per_page: int = 10) -> Dict[str, Any]:
    """
    Paginate a SQLAlchemy query.
    
    Args:
        query: SQLAlchemy query object
        page: Page number (1-based)
        per_page: Number of items per page
        
    Returns:
        dict: Pagination info and results
    """
    if page < 1:
        page = 1
    if per_page < 1:
        per_page = 10
    
    items = query.paginate(page=page, per_page=per_page, error_out=False)
    
    return {
        'items': [item.to_dict() for item in items.items],
        'page': page,
        'per_page': per_page,
        'total': items.total,
        'pages': items.pages,
        'has_next': items.has_next,
        'has_prev': items.has_prev,
        'next_num': items.next_num,
        'prev_num': items.prev_num,
    }


def purge_database(db) -> Dict[str, Any]:
    """
    Purge old or inactive records from the database.
    
    This function performs the following cleanup operations:
    1. Deletes posts that have been marked as not alive after multiple failed checks
    2. Deletes API keys that have not been used for a long time
    
    Args:
        db: Database connection object
        
    Returns:
        Dict[str, Any]: Result of the purge operation with counts of deleted items
    """
    try:
        # Get current time in UTC
        now = datetime.now(timezone.utc)
        
        # Delete posts that are not alive
        post_cursor = db.execute('DELETE FROM post WHERE is_alive = 0 AND failed_checks >= 3')
        posts_deleted = post_cursor.rowcount
        
        # Delete unused API keys (those without any posts and not used for 30+ days)
        # First, find API keys that don't have any posts
        unused_keys_query = '''
            SELECT key_hash FROM api_key 
            WHERE key_hash NOT IN (SELECT DISTINCT api_key_hash FROM post)
            AND (last_used_at IS NULL OR last_used_at < date('now', '-30 days'))
        '''
        unused_keys = db.execute(unused_keys_query).fetchall()
        
        # Delete the unused keys
        if unused_keys:
            placeholders = ','.join(['?'] * len(unused_keys))
            key_hashes = [key['key_hash'] for key in unused_keys]
            key_cursor = db.execute(f'DELETE FROM api_key WHERE key_hash IN ({placeholders})', key_hashes)
            keys_deleted = key_cursor.rowcount
        else:
            keys_deleted = 0
            
        # Commit the transaction
        db.commit()
        
        return {
            'success': True,
            'timestamp': now.isoformat(),
            'posts_deleted': posts_deleted,
            'keys_deleted': keys_deleted
        }
    except Exception as e:
        # Rollback in case of error
        db.rollback()
        logger.error(f"Database purge failed: {str(e)}")
        return {
            'success': False,
            'error': str(e)
        }