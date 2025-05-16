import hashlib
import secrets

def hash_api_key(api_key):
    return hashlib.sha256(api_key.encode('utf-8')).hexdigest()

def generate_api_key():
    return secrets.token_hex(16)

def post_to_dict(post_row):
    if not post_row:
        return None
    return {
        'id': post_row['id'],
        'tunnel_url': post_row['tunnel_url'],
        'title': post_row['title'],
        'description': post_row['description'],
        'tags': post_row['tags'].split(',') if post_row['tags'] else [],
        'provider': post_row['provider'],
        'upvotes': post_row['upvotes'],
        'created_at': post_row['created_at'],
        'is_alive': bool(post_row['is_alive']) if 'is_alive' in post_row.keys() else True,
        'last_checked': post_row['last_checked'] if 'last_checked' in post_row.keys() else None,
        'failed_checks': post_row['failed_checks'] if 'failed_checks' in post_row.keys() else 0
    } 