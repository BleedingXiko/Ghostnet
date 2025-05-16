import os

class Config:
    """Base configuration class with default values that can be overridden by environment variables."""
    
    # Database Settings
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL', 'sqlite:///ghostnet.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    
    # CORS Settings
    CORS_ORIGINS = os.environ.get('CORS_ORIGINS', '*')
    
    # App Settings
    DEBUG = os.environ.get('DEBUG', 'True').lower() in ('true', '1', 't')
    PORT = int(os.environ.get('PORT', 5001))
    HOST = os.environ.get('HOST', '0.0.0.0')
    
    # Security Settings
    # In a production environment, you should set a secure secret key via environment variable
    SECRET_KEY = os.environ.get('SECRET_KEY', 'dev_key_please_change_in_production') 