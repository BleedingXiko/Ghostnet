import os
import sys
import logging
import importlib.util
import sqlite3
import hashlib
import secrets
from datetime import datetime
from flask import Flask, request, jsonify, g, send_from_directory
from flask_cors import CORS

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# ------------------------------
# Path and Import Configuration
# ------------------------------

# Set up correct paths for imports
current_dir = os.path.dirname(os.path.abspath(__file__))
parent_dir = os.path.dirname(current_dir)
sys.path.insert(0, parent_dir)
sys.path.insert(0, current_dir)  # Also add backend dir for direct imports

# ------------------------
# Config Initialization
# ------------------------

# Import config directly from file
config_path = os.path.join(current_dir, 'config.py')
spec = importlib.util.spec_from_file_location("config", config_path)
config_module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(config_module)
Config = config_module.Config

# Log configuration
logger.info("Starting GhostNet with configuration:")
logger.info(f"  HOST: {Config.HOST}")
logger.info(f"  PORT: {Config.PORT}")
logger.info(f"  DEBUG: {Config.DEBUG}")

# ------------------------
# App Initialization
# ------------------------

# Create Flask app
app = Flask(__name__, static_url_path='', static_folder='static/dist')
app.config.from_object(Config)

# Setup CORS
CORS(app, resources={r"/*": {"origins": Config.CORS_ORIGINS}})

# ------------------------
# Database and Blueprints
# ------------------------

# Import database module
try:
    from db import init_app, get_db, close_connection
except ImportError:
    import db
    init_app = db.init_app
    get_db = db.get_db
    close_connection = db.close_connection

# Import blueprints
try:
    from blueprints.keys_bp import keys_bp
    from blueprints.posts_bp import posts_bp
    from blueprints.frontend_bp import frontend_bp
except ImportError:
    # Helper function to import modules from file paths
    def import_module_from_file(module_name, file_path):
        spec = importlib.util.spec_from_file_location(module_name, file_path)
        module = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(module)
        return module
    
    # Import blueprints from file paths
    keys_bp_path = os.path.join(current_dir, 'blueprints', 'keys_bp.py')
    posts_bp_path = os.path.join(current_dir, 'blueprints', 'posts_bp.py')
    frontend_bp_path = os.path.join(current_dir, 'blueprints', 'frontend_bp.py')
    
    keys_bp_module = import_module_from_file('keys_bp', keys_bp_path)
    posts_bp_module = import_module_from_file('posts_bp', posts_bp_path)
    frontend_bp_module = import_module_from_file('frontend_bp', frontend_bp_path)
    
    keys_bp = keys_bp_module.keys_bp
    posts_bp = posts_bp_module.posts_bp
    frontend_bp = frontend_bp_module.frontend_bp

# Register blueprints
app.register_blueprint(keys_bp)
app.register_blueprint(posts_bp) 
app.register_blueprint(frontend_bp)

# Initialize database
with app.app_context():
    init_app(app)

# ------------------------
# Helper Functions
# ------------------------

def hash_api_key(api_key):
    """Hashes an API key using SHA256."""
    return hashlib.sha256(api_key.encode('utf-8')).hexdigest()

def generate_api_key():
    """Generate a new API key."""
    return secrets.token_hex(16) # Generates a 32-character hex string

def post_to_dict(post):
    """Convert a post row to dictionary."""
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

# ------------------------
# Route Handlers
# ------------------------

@app.teardown_appcontext
def close_db_connection(exception):
    close_connection(exception)

@app.route('/api/ping', methods=['GET'])
def ping():
    """Simple endpoint to verify API is working"""
    return jsonify({"status": "ok", "message": "GhostNet API is working!"}), 200

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_frontend(path):
    """Serve frontend static files or fallback to index.html for SPA routing"""
    # Check if the requested path directly matches a file in the static folder
    potential_file = os.path.join(app.static_folder, path)
    
    if path and os.path.exists(potential_file) and os.path.isfile(potential_file):
        return send_from_directory(app.static_folder, path)
    else:
        # For any path not found, serve index.html for client-side routing
        return send_from_directory(app.static_folder, 'index.html')

# ------------------------
# Server Startup
# ------------------------

if __name__ == "__main__":
    # Use the settings from Config class (which gets values from environment variables)
    host = Config.HOST
    port = Config.PORT
    debug = Config.DEBUG
    
    logger.info(f"Server starting on {host}:{port}")
    app.run(host=host, port=port, debug=debug) 