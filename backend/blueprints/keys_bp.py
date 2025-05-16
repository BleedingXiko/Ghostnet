from flask import Blueprint, jsonify, current_app
from backend.db import get_db
from backend.utils import generate_api_key, hash_api_key
import sqlite3

keys_bp = Blueprint('keys', __name__, url_prefix='/api')

@keys_bp.route('/generate_key', methods=['POST'])
def create_api_key_route(): # Renamed to avoid conflict if you have other create_api_key functions
    new_key = generate_api_key()
    hashed_key = hash_api_key(new_key)
    
    db = get_db()
    try:
        db.execute('INSERT INTO api_key (key_hash) VALUES (?)', (hashed_key,))
        db.commit()
        current_app.logger.info(f"Generated new API key (hash: {hashed_key[:8]}...)")
        return jsonify({"api_key": new_key, "message": "API key generated. Please save it securely!"}), 201
    except sqlite3.IntegrityError:
        current_app.logger.error("API key collision during generation.")
        return jsonify({"error": "API key collision, please try again"}), 500 