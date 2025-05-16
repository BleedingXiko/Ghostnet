from flask import Blueprint, request, jsonify, current_app
from backend.db import get_db
from backend.utils import hash_api_key, post_to_dict
import requests # For check_link
from requests.exceptions import RequestException # For check_link

posts_bp = Blueprint('posts', __name__, url_prefix='/api')

def get_validated_api_key_hash():
    auth_header = request.headers.get('Authorization')
    if not auth_header or not auth_header.startswith('Bearer '):
        return None, jsonify({"error": "Authorization header missing or invalid"}), 401

    api_key_provided = auth_header.split(' ')[1]
    hashed_api_key_provided = hash_api_key(api_key_provided)

    db = get_db()
    api_key_entry = db.execute('SELECT id FROM api_key WHERE key_hash = ?', (hashed_api_key_provided,)).fetchone()
    if not api_key_entry:
        return None, jsonify({"error": "Invalid API key"}), 403
    return hashed_api_key_provided, None, None # hash, error_response, status_code

@posts_bp.route('/publish', methods=['POST'])
def publish_post_route():
    hashed_api_key, error_response, status_code = get_validated_api_key_hash()
    if error_response: return error_response, status_code

    data = request.get_json()
    if not data:
        return jsonify({"error": "Invalid JSON payload"}), 400

    required_fields = ['tunnel_url', 'title', 'provider']
    for field in required_fields:
        if field not in data or not data[field]:
            return jsonify({"error": f"Missing required field: {field}"}), 400

    if data['provider'] not in ['Pinggy', 'Cloudflare']:
        return jsonify({"error": "Invalid provider. Must be 'Pinggy' or 'Cloudflare'."}), 400
    
    tags_data = data.get('tags')
    tags_str = ','.join(tag.strip() for tag in tags_data if tag.strip()) if isinstance(tags_data, list) else (tags_data if isinstance(tags_data, str) else None)

    db = get_db()
    cursor = db.execute('''
        INSERT INTO post (tunnel_url, title, description, tags, provider, api_key_hash) 
        VALUES (?, ?, ?, ?, ?, ?)
    ''', (
        data['tunnel_url'], data['title'], data.get('description'), 
        tags_str, data['provider'], hashed_api_key
    ))
    db.commit()
    
    post_id = cursor.lastrowid
    new_post_row = db.execute('SELECT * FROM post WHERE id = ?', (post_id,)).fetchone()
    current_app.logger.info(f"Published new post ID: {post_id} by API key (hash: {hashed_api_key[:8]}...)")
    return jsonify(post_to_dict(new_post_row)), 201

@posts_bp.route('/posts', methods=['GET'])
def get_posts_route():
    db = get_db()
    post_rows = db.execute('SELECT * FROM post ORDER BY created_at DESC').fetchall()
    return jsonify([post_to_dict(row) for row in post_rows]), 200

@posts_bp.route('/my_posts', methods=['GET'])
def get_my_posts_route():
    hashed_api_key, error_response, status_code = get_validated_api_key_hash()
    if error_response: return error_response, status_code

    db = get_db()
    post_rows = db.execute('SELECT * FROM post WHERE api_key_hash = ? ORDER BY created_at DESC', (hashed_api_key,)).fetchall()
    return jsonify([post_to_dict(row) for row in post_rows]), 200

@posts_bp.route('/post/<int:post_id>', methods=['PUT'])
def update_post_route(post_id):
    hashed_api_key, error_response, status_code = get_validated_api_key_hash()
    if error_response: return error_response, status_code

    db = get_db()
    post = db.execute('SELECT * FROM post WHERE id = ?', (post_id,)).fetchone()
    if not post:
        return jsonify({"error": "Post not found"}), 404
    if post['api_key_hash'] != hashed_api_key:
        return jsonify({"error": "Forbidden: You can only update your own posts"}), 403

    data = request.get_json()
    if not data: return jsonify({"error": "Invalid JSON payload"}), 400

    update_fields = []
    params = []
    allowed_fields = ['title', 'description', 'tunnel_url', 'provider', 'tags']

    for field in allowed_fields:
        if field in data:
            if field == 'provider' and data[field] not in ['Pinggy', 'Cloudflare']:
                return jsonify({"error": "Invalid provider"}), 400
            if field == 'tags':
                tags_data = data.get('tags')
                params.append(','.join(tag.strip() for tag in tags_data if tag.strip()) if isinstance(tags_data, list) else (tags_data if isinstance(tags_data, str) else None))
            else:
                params.append(data[field])
            update_fields.append(f'{field} = ?')

    if not update_fields: return jsonify({"error": "No fields to update"}), 400
    
    params.append(post_id)
    db.execute(f'UPDATE post SET {", ".join(update_fields)} WHERE id = ?', params)
    db.commit()
    
    updated_post_row = db.execute('SELECT * FROM post WHERE id = ?', (post_id,)).fetchone()
    current_app.logger.info(f"Updated post ID: {post_id} by API key (hash: {hashed_api_key[:8]}...)")
    return jsonify(post_to_dict(updated_post_row)), 200

@posts_bp.route('/post/<int:post_id>', methods=['DELETE'])
def delete_post_route(post_id):
    hashed_api_key, error_response, status_code = get_validated_api_key_hash()
    if error_response: return error_response, status_code

    db = get_db()
    post = db.execute('SELECT * FROM post WHERE id = ?', (post_id,)).fetchone()
    if not post: return jsonify({"error": "Post not found"}), 404
    if post['api_key_hash'] != hashed_api_key:
        return jsonify({"error": "Forbidden: You can only delete your own posts"}), 403

    db.execute('DELETE FROM post WHERE id = ?', (post_id,))
    db.commit()
    current_app.logger.info(f"Deleted post ID: {post_id} by API key (hash: {hashed_api_key[:8]}...)")
    return jsonify({"message": "Post deleted successfully"}), 200

@posts_bp.route('/vote/<int:post_id>', methods=['POST'])
def vote_post_route(post_id):
    db = get_db()
    post = db.execute('SELECT * FROM post WHERE id = ?', (post_id,)).fetchone()
    if not post: return jsonify({"error": "Post not found"}), 404

    db.execute('UPDATE post SET upvotes = upvotes + 1 WHERE id = ?', (post_id,))
    db.commit()
    updated_post_row = db.execute('SELECT * FROM post WHERE id = ?', (post_id,)).fetchone()
    current_app.logger.info(f"Upvoted post ID: {post_id}")
    return jsonify(post_to_dict(updated_post_row)), 200

# --- Link Checking --- #
@posts_bp.route('/check_link/<int:post_id>', methods=['GET'])
def check_link_route(post_id):
    db = get_db()
    post = db.execute('SELECT * FROM post WHERE id = ?', (post_id,)).fetchone()
    if not post: return jsonify({"error": "Post not found"}), 404
    
    tunnel_url = post['tunnel_url']
    is_alive = False
    status_code_val = None
    error_val = None
    failed_checks_val = post['failed_checks']

    try:
        response = requests.head(tunnel_url, timeout=5)
        is_alive = response.status_code < 400
        status_code_val = response.status_code
        if is_alive:
            db.execute('UPDATE post SET last_checked = CURRENT_TIMESTAMP, is_alive = 1, failed_checks = 0 WHERE id = ?', (post_id,))
            failed_checks_val = 0
        else:
            failed_checks_val += 1
    except RequestException as e:
        error_val = str(e)
        failed_checks_val += 1

    if not is_alive:
        if failed_checks_val >= 3:
            db.execute('DELETE FROM post WHERE id = ?', (post_id,))
            db.commit()
            current_app.logger.info(f"Post ID: {post_id} auto-deleted after {failed_checks_val} failed checks.")
            return jsonify({"id": post_id, "is_alive": False, "status_code": status_code_val, "error": error_val, "message": "Post auto-deleted"}), 200
        else:
            db.execute('UPDATE post SET last_checked = CURRENT_TIMESTAMP, is_alive = 0, failed_checks = ? WHERE id = ?', (failed_checks_val, post_id))
            current_app.logger.warning(f"Post ID: {post_id} failed check {failed_checks_val}/3. URL: {tunnel_url}, Status: {status_code_val}, Error: {error_val}")
    db.commit()
    return jsonify({"id": post_id, "is_alive": is_alive, "status_code": status_code_val, "error": error_val, "failed_checks": failed_checks_val}), 200

@posts_bp.route('/check_all_links', methods=['GET'])
def check_all_links_route():
    db = get_db()
    all_posts = db.execute('SELECT id FROM post').fetchall()
    results = []
    for p_row in all_posts:
        # Calling the check_link_route function directly is not ideal for blueprints.
        # It's better to call its underlying logic or make an internal request if necessary.
        # For simplicity here, we'll replicate a bit or assume an internal helper.
        # However, the jsonify from check_link_route returns a Response object,
        # which can't be directly appended. We need its JSON content.
        # This part needs careful handling in a real app.
        # For now, let's just get the ID and simulate a call for demonstration.
        # A better way would be to refactor check_link_route's core logic into a helper.
        
        # Simplified: Get the result of check_link for each post
        # This is a conceptual placeholder. In a real app, you'd call a helper or internal request.
        response_tuple = check_link_route(p_row['id']) # This returns (Response, status_code)
        results.append(response_tuple[0].get_json()) # Get JSON from the Response object

    current_app.logger.info(f"Checked all {len(results)} links.")
    return jsonify(results), 200 