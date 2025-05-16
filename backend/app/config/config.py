import os
from datetime import timedelta

class Config:
    """Configuration settings for the GhostNet application."""
    # Flask settings
    SECRET_KEY = os.environ.get('SECRET_KEY', 'dev-secret-change-me')
    # Set DEBUG to False for production
    DEBUG = os.environ.get('FLASK_DEBUG', 'False').lower() in ('true', '1', 't')
    # Database settings
    DATABASE_FILENAME = os.environ.get('DATABASE_FILENAME', 'ghostnet.db')
    # API settings
    API_TITLE = 'GhostNet API'
    API_VERSION = 'v1'
    # Security settings
    JWT_SECRET_KEY = os.environ.get('JWT_SECRET_KEY', SECRET_KEY)
    JWT_ACCESS_TOKEN_EXPIRES = timedelta(hours=1)
    # CORS settings
    CORS_ORIGINS = os.environ.get('CORS_ORIGINS', '*')
    # Logging settings
    LOG_LEVEL = os.environ.get('LOG_LEVEL', 'DEBUG')
    # Maintenance settings
    PURGE_INTERVAL_HOURS = int(os.environ.get('PURGE_INTERVAL_HOURS', '24'))
    POST_EXPIRY_DAYS = int(os.environ.get('POST_EXPIRY_DAYS', '7'))
    # Link checking settings
    LINK_CHECK_INTERVAL_HOURS = int(os.environ.get('LINK_CHECK_INTERVAL_HOURS', '1'))
    MAX_FAILED_CHECKS = int(os.environ.get('MAX_FAILED_CHECKS', '3'))
    # Static file settings
    STATIC_FOLDER = 'static/dist'

    """Configuration settings for the GhostNet application."""
    
    # Flask settings
    SECRET_KEY = os.environ.get('SECRET_KEY', 'dev-secret-change-me')
    # Set DEBUG to False for production
    DEBUG = os.environ.get('FLASK_DEBUG', 'False').lower() in ('true', '1', 't')
    
    # Database settings
    DATABASE_FILENAME = os.environ.get('DATABASE_FILENAME', 'ghostnet.db')
    
    # API settings
    API_TITLE = 'GhostNet API'
    API_VERSION = 'v1'
    
    # Security settings
    JWT_SECRET_KEY = os.environ.get('JWT_SECRET_KEY', SECRET_KEY)
    JWT_ACCESS_TOKEN_EXPIRES = timedelta(hours=1)
    
    # CORS settings
    CORS_ORIGINS = os.environ.get('CORS_ORIGINS', '*')
    
    # Logging settings
    LOG_LEVEL = os.environ.get('LOG_LEVEL', 'DEBUG')
    
    # Maintenance settings
    PURGE_INTERVAL_HOURS = int(os.environ.get('PURGE_INTERVAL_HOURS', '24'))
    POST_EXPIRY_DAYS = int(os.environ.get('POST_EXPIRY_DAYS', '7'))
    
    # Link checking settings
    LINK_CHECK_INTERVAL_HOURS = int(os.environ.get('LINK_CHECK_INTERVAL_HOURS', '1'))
    MAX_FAILED_CHECKS = int(os.environ.get('MAX_FAILED_CHECKS', '3'))
    
    # Static file settings
    STATIC_FOLDER = 'static/dist'
