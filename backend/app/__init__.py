from flask import Flask
from flask_cors import CORS
import os
import logging

# Import configurations
from app.config.config import Config

# Import database initialization
from app.models.db import init_app as init_db, close_connection

def create_app(test_config=None):
    """
    Application factory function that creates and configures the Flask app.
    
    Args:
        test_config: Configuration to use for testing (optional)
        
    Returns:
        Flask application instance
    """
    # Create Flask app
    app = Flask(__name__, static_url_path='', static_folder='static/dist')
    
    # Load default configuration
    app.config.from_object(Config)
    
    # Override with test config if provided
    if test_config:
        app.config.update(test_config)
    
    # Ensure instance folder exists
    try:
        os.makedirs(app.instance_path, exist_ok=True)
    except OSError:
        pass
    
    # Setup CORS
    CORS(app, resources={r"/*": {"origins": "*"}})
    
    # Configure logging
    logging.basicConfig(level=logging.DEBUG)
    
    # Initialize database
    init_db(app)
    
    # Register blueprints
    from app.api.keys import keys_bp
    from app.api.posts import posts_bp
    from app.api.frontend import frontend_bp
    
    app.register_blueprint(keys_bp)
    app.register_blueprint(posts_bp)
    app.register_blueprint(frontend_bp)
    
    # Register simple ping route
    @app.route('/api/ping', methods=['GET'])
    def ping():
        return {"message": "pong"}, 200
    
    return app
