from functools import wraps
from flask import request, jsonify, g, current_app
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from jose import jwt, JWTError
from datetime import datetime, timedelta, timezone
import hashlib
import hmac
import os

# Initialize rate limiter
limiter = Limiter(
    key_func=get_remote_address,
    default_limits=["200 per day", "50 per hour"],
    storage_uri="memory://"
)

def get_rate_limit():
    """Get rate limit from config."""
    return current_app.config.get('RATELIMIT_DEFAULT', '100 per minute')

def hash_api_key(api_key):
    """Hash the API key for secure storage."""
    secret = current_app.config.get('SECRET_KEY', 'dev-secret-change-me')
    return hmac.new(
        secret.encode('utf-8'),
        msg=api_key.encode('utf-8'),
        digestmod=hashlib.sha256
    ).hexdigest()

def generate_jwt_token(api_key_hash, expires_delta=None):
    """Generate a JWT token for the given API key hash."""
    if expires_delta is None:
        expires_delta = timedelta(minutes=current_app.config['JWT_ACCESS_TOKEN_EXPIRE_MINUTES'])
    
    expire = datetime.now(timezone.utc) + expires_delta
    
    payload = {
        'sub': api_key_hash,
        'exp': expire,
        'iat': datetime.now(timezone.utc),
        'type': 'access'
    }
    
    token = jwt.encode(
        payload,
        current_app.config['JWT_SECRET_KEY'],
        algorithm=current_app.config['JWT_ALGORITHM']
    )
    
    return token, expire

def verify_jwt_token(token):
    """Verify a JWT token and return the payload if valid."""
    try:
        payload = jwt.decode(
            token,
            current_app.config['JWT_SECRET_KEY'],
            algorithms=[current_app.config['JWT_ALGORITHM']]
        )
        return payload
    except JWTError:
        return None

def api_key_required(f):
    """Decorator to require API key authentication."""
    @wraps(f)
    def decorated_function(*args, **kwargs):
        # Check for API key in Authorization header
        auth_header = request.headers.get('Authorization')
        if not auth_header or not auth_header.startswith('Bearer '):
            return jsonify({"error": "Missing or invalid Authorization header"}), 401
        
        token = auth_header.split(' ')[1]
        payload = verify_jwt_token(token)
        
        if not payload:
            return jsonify({"error": "Invalid or expired token"}), 401
        
        # Store the API key hash in the request context
        g.api_key_hash = payload['sub']
        
        return f(*args, **kwargs)
    
    return decorated_function

def admin_required(f):
    """Decorator to require admin privileges."""
    @wraps(f)
    @api_key_required
    def decorated_function(*args, **kwargs):
        # In a real app, you would check if the API key has admin privileges
        # For now, we'll just check if the API key is in the admin keys list
        admin_keys = current_app.config.get('ADMIN_API_KEYS', [])
        
        if g.api_key_hash not in admin_keys:
            return jsonify({"error": "Insufficient permissions"}), 403
            
        return f(*args, **kwargs)
    
    return decorated_function

def rate_limit_by_api_key():
    """Rate limit by API key if provided, otherwise by IP."""
    auth_header = request.headers.get('Authorization')
    if auth_header and auth_header.startswith('Bearer '):
        token = auth_header.split(' ')[1]
        payload = verify_jwt_token(token)
        if payload:
            return f"api_key:{payload['sub']}"
    
    return get_remote_address()

def init_security(app):
    """Initialize security extensions."""
    # Initialize rate limiter
    limiter.init_app(app)
    
    # Set rate limit storage
    if app.config.get('RATELIMIT_STORAGE_URL'):
        limiter.storage_uri = app.config['RATELIMIT_STORAGE_URL']
    
    # Set default rate limits
    limiter.limit(get_rate_limit, key_func=rate_limit_by_api_key)
    
    # Add security headers
    @app.after_request
    def add_security_headers(response):
        # Prevent clickjacking
        response.headers['X-Frame-Options'] = 'DENY'
        
        # Enable XSS protection
        response.headers['X-XSS-Protection'] = '1; mode=block'
        
        # Prevent MIME type sniffing
        response.headers['X-Content-Type-Options'] = 'nosniff'
        
        # Content Security Policy
        csp = """
            default-src 'self';
            script-src 'self' 'unsafe-inline' 'unsafe-eval';
            style-src 'self' 'unsafe-inline';
            img-src 'self' data:;
            font-src 'self';
            connect-src 'self';
            frame-ancestors 'none';
            form-action 'self';
        """
        response.headers['Content-Security-Policy'] = ' '.join(csp.split())
        
        # HSTS
        if app.config.get('ENV') == 'production':
            response.headers['Strict-Transport-Security'] = 'max-age=31536000; includeSubDomains; preload'
        
        return response
    
    return app
