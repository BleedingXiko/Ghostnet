import sqlite3
import os # Added os import
from flask import g, current_app

# DATABASE_NAME global is removed. Path will be determined dynamically.

def get_database_path():
    # Default to a name, will be joined with instance_path
    # Ensure the key used here matches what you might set in app.config if you want to override it
    db_filename = current_app.config.get('DATABASE_FILENAME', 'ghostnet.db')
    return os.path.join(current_app.root_path, db_filename)

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db_path = get_database_path()
        # Ensure the instance folder (and specifically the directory for the DB) exists
        os.makedirs(os.path.dirname(db_path), exist_ok=True)
        current_app.logger.info(f"Connecting to database at: {db_path}")
        db = g._database = sqlite3.connect(db_path)
        db.row_factory = sqlite3.Row
    return db

def close_connection(exception=None):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

def init_db_command():
    # This function can be called via Flask CLI or directly as we do in init_app
    # It now uses get_db() which correctly resolves the path.
    db = get_db() 
    current_app.logger.info(f"Initializing database schema at {get_database_path()}")
    # Create Post table
    db.execute('''
        CREATE TABLE IF NOT EXISTS post (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            tunnel_url TEXT NOT NULL,
            title TEXT NOT NULL,
            description TEXT,
            tags TEXT,
            provider TEXT NOT NULL,
            upvotes INTEGER DEFAULT 0,
            api_key_hash TEXT NOT NULL,
            is_alive INTEGER DEFAULT 1,
            last_checked TIMESTAMP,
            failed_checks INTEGER DEFAULT 0,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    # Create ApiKey table
    db.execute('''
        CREATE TABLE IF NOT EXISTS api_key (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            key_hash TEXT NOT NULL UNIQUE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    
    cursor = db.execute("PRAGMA table_info(post)")
    columns = {col[1] for col in cursor.fetchall()}
    
    if "is_alive" not in columns:
        db.execute("ALTER TABLE post ADD COLUMN is_alive INTEGER DEFAULT 1")
    if "last_checked" not in columns:
        db.execute("ALTER TABLE post ADD COLUMN last_checked TIMESTAMP")
    if "failed_checks" not in columns:
        db.execute("ALTER TABLE post ADD COLUMN failed_checks INTEGER DEFAULT 0")
        
    db.commit()
    current_app.logger.info("Database initialized successfully.")

def init_app(app):
    # Register database functions with the Flask app
    app.teardown_appcontext(close_connection)
    
    # Set a default for the database filename in app.config if not already set
    app.config.setdefault('DATABASE_FILENAME', 'ghostnet.db')

    # Initialize DB if tables don't exist (simple check)
    with app.app_context():
        db_path = get_database_path()
        # Check if the database file itself exists before trying to check tables
        # This avoids an error if the directory exists but the file doesn't
        # However, sqlite3.connect() will create the file if it doesn't exist,
        # so a table check is more robust for schema initialization.
        needs_init = True
        if os.path.exists(db_path):
            try:
                # Try a lightweight connection just to see if we can query
                conn_check = sqlite3.connect(db_path)
                cursor_check = conn_check.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='post';")
                if cursor_check.fetchone() is not None:
                    needs_init = False
                conn_check.close()
            except sqlite3.DatabaseError:
                app.logger.warning(f"Database file at {db_path} might be corrupted or not a DB. Will attempt reinitialization.")
                needs_init = True # Proceed with initialization if file is bad
        
        if needs_init:
            app.logger.info("Database tables not found or DB file issue, initializing schema...")
            init_db_command() # Call the initialization logic using the app context's db connection
        else:
            app.logger.info(f"Database tables already exist in {db_path}.") 