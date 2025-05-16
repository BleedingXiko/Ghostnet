import os
import logging
from logging.handlers import RotatingFileHandler, SysLogHandler
from pythonjsonlogger import jsonlogger
from flask import has_request_context, request
import time

def add_request_id_filter():
    """Add request ID to log records if available in Flask's request context."""
    def filter(record):
        if has_request_context():
            record.request_id = request.headers.get('X-Request-ID', 'no-request-id')
        else:
            record.request_id = 'no-request-context'
        return True
    return filter

class RequestIdFilter(logging.Filter):
    """Filter to add request ID to log records."""
    def filter(self, record):
        if has_request_context():
            record.request_id = request.headers.get('X-Request-ID', 'no-request-id')
        else:
            record.request_id = 'no-request-context'
        return True

class JsonFormatter(jsonlogger.JsonFormatter):
    """Custom JSON formatter that includes additional context."""
    def add_fields(self, log_record, record, message_dict):
        super().add_fields(log_record, record, message_dict)
        if not log_record.get('timestamp'):
            log_record['timestamp'] = time.time()
        if log_record.get('level'):
            log_record['level'] = log_record['level'].upper()
        else:
            log_record['level'] = record.levelname


def configure_logging(app):
    """Configure logging for the application."""
    # Remove all existing handlers
    for handler in list(app.logger.handlers):
        app.logger.removeHandler(handler)
    
    # Set log level
    log_level = getattr(logging, app.config.get('LOG_LEVEL', 'INFO').upper())
    app.logger.setLevel(log_level)
    
    # Create formatters
    if app.config.get('LOG_FORMAT', 'text') == 'json':
        formatter = JsonFormatter(
            '%(timestamp)s %(level)s %(name)s %(message)s %(module)s %(funcName)s %(lineno)s',
            timestamp=True
        )
    else:
        formatter = logging.Formatter(
            '%(asctime)s - %(name)s - %(levelname)s - [%(request_id)s] - %(message)s',
            datefmt='%Y-%m-%d %H:%M:%S'
        )
    
    # Console handler (always enabled)
    console_handler = logging.StreamHandler()
    console_handler.setFormatter(formatter)
    console_handler.addFilter(RequestIdFilter())
    app.logger.addHandler(console_handler)
    
    # File handler (for production)
    if app.config.get('ENV') == 'production':
        os.makedirs('logs', exist_ok=True)
        file_handler = RotatingFileHandler(
            'logs/ghostnet.log',
            maxBytes=10485760,  # 10MB
            backupCount=10
        )
        file_handler.setFormatter(formatter)
        file_handler.setLevel(log_level)
        file_handler.addFilter(RequestIdFilter())
        app.logger.addHandler(file_handler)
    
    # Disable verbose logging from other libraries
    for logger_name in ['urllib3', 'werkzeug', 'sqlalchemy', 'boto3', 'botocore', 's3transfer']:
        logging.getLogger(logger_name).setLevel(logging.WARNING)
    
    # Set SQLAlchemy logging level
    if app.config.get('SQLALCHEMY_ECHO'):
        logging.getLogger('sqlalchemy.engine').setLevel(logging.INFO)
    
    # Add request logging
    @app.before_request
    def log_request_info():
        if request.path == app.config.get('PROMETHEUS_METRICS_PATH'):
            return  # Skip logging for metrics endpoint
            
        app.logger.info(
            "Request started",
            extra={
                'method': request.method,
                'path': request.path,
                'ip': request.remote_addr,
                'user_agent': request.user_agent.string,
                'content_type': request.content_type,
            }
        )
    
    @app.after_request
    def log_response_info(response):
        if request.path == app.config.get('PROMETHEUS_METRICS_PATH'):
            return response  # Skip logging for metrics endpoint
            
        app.logger.info(
            "Request completed",
            extra={
                'method': request.method,
                'path': request.path,
                'status': response.status_code,
                'content_length': response.content_length or 0,
                'response_time': request.environ.get('X-Request-Duration', 0) * 1000,  # in ms
            }
        )
        return response
    
    # Log unhandled exceptions
    @app.errorhandler(Exception)
    def handle_exception(e):
        app.logger.exception("Unhandled exception")
        return {'error': 'Internal server error'}, 500
    
    return app
