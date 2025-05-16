import sqlite3
import os
import logging
from flask import Flask, request, jsonify, g, send_from_directory
from flask_cors import CORS
from datetime import datetime

# Import configurations and database setup
from config import Config
import db
from db import get_db

# Import utility functions
from utils import hash_api_key, generate_api_key, post_to_dict

# Import blueprints
from blueprints.keys_bp import keys_bp
from blueprints.posts_bp import posts_bp
from blueprints.frontend_bp import frontend_bp

# Configure logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

# Create Flask app. Flask will automatically look for a 'static' folder
# in the same directory as this app.py file.
# static_url_path='' means that files in the 'static' folder will be served from the root.
# e.g., backend/static/index.html will be available at /index.html
app = Flask(__name__, static_url_path='', static_folder='static/dist') 
# Load configuration from Config class
app.config.from_object(Config)
# Setup CORS properly for all routes
CORS(app, resources={r"/*": {"origins": "*"}})

# Helper functions are now imported from utils.py

# --- API Endpoints ---
@app.route('/api/generate_key', methods=['POST'])
def create_api_key():
    new_key = generate_api_key()
    hashed_key = hash_api_key(new_key)
    
    db = get_db()
    try:
        db.execute('INSERT INTO api_key (key_hash) VALUES (?)', (hashed_key,))
        db.commit()
        return jsonify({"api_key": new_key, "message": "API key generated. Please save it securely!"}), 201
    except sqlite3.IntegrityError:
        # Extremely unlikely collision
        return jsonify({"error": "API key collision, please try again"}), 500

@app.route('/api/publish', methods=['POST'])
def publish_post():
    auth_header = request.headers.get('Authorization')
    if not auth_header or not auth_header.startswith('Bearer '):
        return jsonify({"error": "Authorization header missing or invalid"}), 401

    api_key_provided = auth_header.split(' ')[1]
    hashed_api_key_provided = hash_api_key(api_key_provided)

    db = get_db()
    api_key_entry = db.execute('SELECT id FROM api_key WHERE key_hash = ?', (hashed_api_key_provided,)).fetchone()
    if not api_key_entry:
        return jsonify({"error": "Invalid API key"}), 403

    data = request.get_json()
    if not data:
        return jsonify({"error": "Invalid JSON payload"}), 400

    required_fields = ['tunnel_url', 'title', 'provider']
    for field in required_fields:
        if field not in data or not data[field]:
            return jsonify({"error": f"Missing required field: {field}"}), 400

    # Validate provider
    if data['provider'] not in ['Pinggy', 'Cloudflare']:
        return jsonify({"error": "Invalid provider. Must be 'Pinggy' or 'Cloudflare'."}), 400
    
    # Handle tags: convert list to comma-separated string if necessary
    tags_data = data.get('tags')
    if isinstance(tags_data, list):
        tags_str = ','.join(tag.strip() for tag in tags_data if tag.strip())
    elif isinstance(tags_data, str):
        tags_str = tags_data
    else:
        tags_str = None

    db.execute('''
        INSERT INTO post (tunnel_url, title, description, tags, provider, api_key_hash) 
        VALUES (?, ?, ?, ?, ?, ?)
    ''', (
        data['tunnel_url'], 
        data['title'], 
        data.get('description'), 
        tags_str, 
        data['provider'], 
        hashed_api_key_provided
    ))
    db.commit()
    
    post_id = db.execute('SELECT last_insert_rowid()').fetchone()[0]
    new_post = db.execute('SELECT * FROM post WHERE id = ?', (post_id,)).fetchone()
    
    return jsonify(post_to_dict(new_post)), 201

@app.route('/api/posts', methods=['GET'])
def get_posts():
    db = get_db()
    posts = db.execute('SELECT * FROM post ORDER BY created_at DESC').fetchall()
    return jsonify([post_to_dict(post) for post in posts]), 200

@app.route('/api/post/<int:post_id>', methods=['PUT'])
def update_post(post_id):
    auth_header = request.headers.get('Authorization')
    if not auth_header or not auth_header.startswith('Bearer '):
        return jsonify({"error": "Authorization header missing or invalid"}), 401

    api_key_provided = auth_header.split(' ')[1]
    hashed_api_key_provided = hash_api_key(api_key_provided)

    db = get_db()
    # Check if the API key is valid
    api_key_entry = db.execute('SELECT id FROM api_key WHERE key_hash = ?', (hashed_api_key_provided,)).fetchone()
    if not api_key_entry:
        return jsonify({"error": "Invalid API key"}), 403

    # Check if post exists
    post = db.execute('SELECT * FROM post WHERE id = ?', (post_id,)).fetchone()
    if not post:
        return jsonify({"error": "Post not found"}), 404

    # Check if the API key matches the one used to create the post
    if post['api_key_hash'] != hashed_api_key_provided:
        return jsonify({"error": "Forbidden: You can only update your own posts"}), 403

    data = request.get_json()
    if not data:
        return jsonify({"error": "Invalid JSON payload"}), 400

    # Build the update query dynamically based on what fields are provided
    update_fields = []
    params = []

    if 'title' in data:
        update_fields.append('title = ?')
        params.append(data['title'])
    
    if 'description' in data:
        update_fields.append('description = ?')
        params.append(data['description'])
    
    if 'tunnel_url' in data:
        update_fields.append('tunnel_url = ?')
        params.append(data['tunnel_url'])
    
    if 'provider' in data:
        if data['provider'] not in ['Pinggy', 'Cloudflare']:
            return jsonify({"error": "Invalid provider. Must be 'Pinggy' or 'Cloudflare'."}), 400
        update_fields.append('provider = ?')
        params.append(data['provider'])
    
    if 'tags' in data:
        tags_data = data.get('tags')
        if isinstance(tags_data, list):
            tags_str = ','.join(tag.strip() for tag in tags_data if tag.strip())
        elif isinstance(tags_data, str):
            tags_str = tags_data
        else:
            tags_str = None
        update_fields.append('tags = ?')
        params.append(tags_str)
    
    if not update_fields:
        return jsonify({"error": "No fields to update provided"}), 400
    
    # Add post_id to params
    params.append(post_id)
    
    # Execute the update
    db.execute(f'''
        UPDATE post SET {', '.join(update_fields)} WHERE id = ?
    ''', params)
    db.commit()
    
    # Fetch updated post
    updated_post = db.execute('SELECT * FROM post WHERE id = ?', (post_id,)).fetchone()
    return jsonify(post_to_dict(updated_post)), 200

@app.route('/api/post/<int:post_id>', methods=['DELETE'])
def delete_post(post_id):
    auth_header = request.headers.get('Authorization')
    if not auth_header or not auth_header.startswith('Bearer '):
        return jsonify({"error": "Authorization header missing or invalid"}), 401

    api_key_provided = auth_header.split(' ')[1]
    hashed_api_key_provided = hash_api_key(api_key_provided)

    db = get_db()
    # Check if the API key is valid
    api_key_entry = db.execute('SELECT id FROM api_key WHERE key_hash = ?', (hashed_api_key_provided,)).fetchone()
    if not api_key_entry:
        return jsonify({"error": "Invalid API key"}), 403

    # Check if post exists
    post = db.execute('SELECT * FROM post WHERE id = ?', (post_id,)).fetchone()
    if not post:
        return jsonify({"error": "Post not found"}), 404

    # Check if the API key matches the one used to create the post
    if post['api_key_hash'] != hashed_api_key_provided:
        return jsonify({"error": "Forbidden: You can only delete your own posts"}), 403

    # Delete the post
    db.execute('DELETE FROM post WHERE id = ?', (post_id,))
    db.commit()
    
    return jsonify({"message": "Post deleted successfully"}), 200

@app.route('/api/vote/<int:post_id>', methods=['POST'])
def vote_post(post_id):
    db = get_db()
    # Check if post exists
    post = db.execute('SELECT * FROM post WHERE id = ?', (post_id,)).fetchone()
    if not post:
        return jsonify({"error": "Post not found"}), 404

    # Increment upvotes
    db.execute('UPDATE post SET upvotes = upvotes + 1 WHERE id = ?', (post_id,))
    db.commit()
    
    # Fetch updated post
    updated_post = db.execute('SELECT * FROM post WHERE id = ?', (post_id,)).fetchone()
    return jsonify(post_to_dict(updated_post)), 200

@app.route('/api/check_link/<int:post_id>', methods=['GET'])
def check_link(post_id):
    """Check if a link is still alive by sending a HEAD request"""
    db = get_db()
    
    # Get the post's URL
    post = db.execute('SELECT * FROM post WHERE id = ?', (post_id,)).fetchone()
    if not post:
        return jsonify({"error": "Post not found"}), 404
    
    tunnel_url = post['tunnel_url']
    
    # Check if link is alive by sending a HEAD request
    import requests
    from requests.exceptions import RequestException
    
    try:
        # Set a short timeout to avoid hanging
        response = requests.head(tunnel_url, timeout=5)
        is_alive = response.status_code < 400  # Consider any non-4xx/5xx response as alive
        
        if is_alive:
            # Reset failed checks if the link is alive
            db.execute('UPDATE post SET last_checked = CURRENT_TIMESTAMP, is_alive = 1, failed_checks = 0 WHERE id = ?', 
                      (post_id,))
            db.commit()
            
            return jsonify({
                "id": post_id,
                "is_alive": True,
                "status_code": response.status_code
            }), 200
        else:
            # Increment failed checks
            failed_checks = post['failed_checks'] + 1
            
            # Auto-delete if failed too many times (3 failures)
            if failed_checks >= 3:
                db.execute('DELETE FROM post WHERE id = ?', (post_id,))
                db.commit()
                return jsonify({
                    "id": post_id,
                    "is_alive": False,
                    "status_code": response.status_code,
                    "message": "Post automatically deleted after repeated failures"
                }), 200
            else:
                # Update the post with the failed status
                db.execute('UPDATE post SET last_checked = CURRENT_TIMESTAMP, is_alive = 0, failed_checks = ? WHERE id = ?', 
                          (failed_checks, post_id))
                db.commit()
                return jsonify({
                    "id": post_id,
                    "is_alive": False,
                    "status_code": response.status_code,
                    "failed_checks": failed_checks
                }), 200
        
    except RequestException as e:
        # Increment failed checks
        failed_checks = post['failed_checks'] + 1
        
        # Auto-delete if failed too many times (3 failures)
        if failed_checks >= 3:
            db.execute('DELETE FROM post WHERE id = ?', (post_id,))
            db.commit()
            return jsonify({
                "id": post_id,
                "is_alive": False,
                "error": str(e),
                "message": "Post automatically deleted after repeated failures"
            }), 200
        else:
            # Consider any exception as a dead link
            db.execute('UPDATE post SET last_checked = CURRENT_TIMESTAMP, is_alive = 0, failed_checks = ? WHERE id = ?', 
                      (failed_checks, post_id))
            db.commit()
            
            return jsonify({
                "id": post_id,
                "is_alive": False,
                "error": str(e),
                "failed_checks": failed_checks
            }), 200

@app.route('/api/check_all_links', methods=['GET'])
def check_all_links():
    """Check all links in the database and update their status"""
    db = get_db()
    
    # Get all posts
    posts = db.execute('SELECT id FROM post').fetchall()
    
    results = []
    for post in posts:
        post_id = post['id']
        result = check_link(post_id)
        # Since check_link returns a tuple of (response, status_code),
        # we need to extract just the JSON response
        results.append(result[0].get_json())
    
    return jsonify(results), 200

# Add a simple endpoint to test API connectivity
@app.route('/api/ping', methods=['GET'])
def ping():
    logger.debug(f"Ping request from {request.remote_addr}")
    return jsonify({"status": "ok", "message": "GhostNet API is working!"}), 200

# --- Serve Frontend ---
# This route will serve index.html for the root path AND any other path not caught by API routes.
# This is important for single-page applications (SPAs) that use client-side routing.
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_frontend(path):
    # Log the request for debugging
    logger.debug(f"Frontend request for path: '{path}' from {request.remote_addr}")
    
    # Check if the requested path directly matches a file in the static folder
    # e.g. /assets/vendor.js or /favicon.ico
    potential_file = os.path.join(app.static_folder, path)
    logger.debug(f"Looking for static file: {potential_file}")

    if path and os.path.exists(potential_file) and os.path.isfile(potential_file):
        logger.debug(f"Serving static file: {path}")
        return send_from_directory(app.static_folder, path)
    else:
        # If the path doesn't match a specific file, or if it's the root path,
        # serve the main index.html file.
        # This allows client-side routing to take over.
        logger.debug(f"Path '{path}' not found as a static file, serving index.html")
        return send_from_directory(app.static_folder, 'index.html')

def create_app(test_config=None):
    # Configure logging. This will affect Flask's default logger.
    # Basic config should ideally be done once at the application entry point.
    # If this file (app.py) is the entry point via 'flask run', this is a reasonable place.
    logging.basicConfig(level=logging.INFO, format='%(asctime)s %(levelname)s %(name)s %(threadName)s : %(message)s')

    app = Flask(__name__, 
                instance_relative_config=True, # Reads config from instance folder
                static_folder='static/dist',      # Serves static files from backend/static
                static_url_path='')          # Makes backend/static/file.txt accessible as /file.txt
    
    app.logger.info(f"App static folder resolved to: {app.static_folder}")


    if test_config is None:
        # Load the app-specific config (config.py)
        app.config.from_object(Config)
        # Load instance config, if it exists (e.g., instance/config.py for secrets)
        # app.config.from_pyfile('config.py', silent=True) # if you have instance/config.py
    else:
        # Load the test config if passed in
        app.config.from_mapping(test_config)
    
    # Ensure the instance folder exists (Flask can use it for SQLite DB, session files, etc.)
    try:
        os.makedirs(app.instance_path)
        app.logger.info(f"Instance path created at {app.instance_path}")
    except OSError:
        app.logger.info(f"Instance path at {app.instance_path} already exists or failed to create.")
        pass 

    # Initialize CORS
    CORS(app, resources={r"/*": {"origins": app.config.get("CORS_ORIGINS", "*")}})
    app.logger.info(f"CORS configured for origins: {app.config.get('CORS_ORIGINS', '*')}")

    # Initialize Database (db.py should handle using app.instance_path)
    db.init_app(app) 
    # db.DATABASE_NAME = os.path.join(app.instance_path, 'ghostnet.db') # This was in prev. app.py, db.init_app should handle this logic
    # app.logger.info(f"Database target path: {os.path.join(app.instance_path, 'ghostnet.db')}")


    # Register blueprints
    app.register_blueprint(keys_bp)
    app.register_blueprint(posts_bp)
    app.register_blueprint(frontend_bp) # Catch-all frontend routes, register last
    app.logger.info("Registered blueprints: keys, posts, frontend")

    app.logger.info("Flask app created and configured successfully.")
    return app

# Register blueprints on the global app instance
app.register_blueprint(keys_bp)
app.register_blueprint(posts_bp)
app.register_blueprint(frontend_bp)

# Initialize the database
db.init_app(app)

# This block allows running with `python app.py`
if __name__ == '__main__':
    # Run the app
    port = app.config.get('PORT', 5001)
    host = app.config.get('HOST', '0.0.0.0')
    debug = app.config.get('DEBUG', True)
    print(f"Starting GhostNet backend on {host}:{port} (debug={debug})")
    app.run(host=host, port=port, debug=debug)