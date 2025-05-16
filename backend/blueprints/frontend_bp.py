from flask import Blueprint, current_app, send_from_directory, request
import os
import sys

frontend_bp = Blueprint('frontend', __name__,
                        # static_folder='../static', # If static is one level up from blueprints dir
                        # static_url_path='' # Serve static files from root
                        )

@frontend_bp.route('/', defaults={'path': ''})
@frontend_bp.route('/<path:path>')
def serve_frontend_route(path):
    static_folder_path = current_app.static_folder # This will be backend/static
    logger = current_app.logger

    logger.debug(f"Frontend request (bp): '{path}' from {request.remote_addr}")
    logger.debug(f"App static folder: {static_folder_path}")

    if path:
        potential_file = os.path.join(static_folder_path, path)
        logger.debug(f"Looking for: {potential_file}")
        if os.path.exists(potential_file) and os.path.isfile(potential_file):
            logger.debug(f"Serving static file: {path}")
            return send_from_directory(static_folder_path, path)
    
    # For root or any other path not matching a file, serve index.html
    logger.debug(f"Path '{path}' not found or is root, serving index.html from {static_folder_path}")
    return send_from_directory(static_folder_path, 'index.html') 