from prometheus_flask_exporter import PrometheusMetrics
from prometheus_client import Counter, Histogram, Gauge
import time
from functools import wraps
from flask import request, g

# Initialize metrics
metrics = PrometheusMetrics.for_app_factory()

# Custom metrics
REQUEST_DURATION = Histogram(
    'http_request_duration_seconds',
    'HTTP request duration in seconds',
    ['method', 'endpoint', 'status_code']
)

REQUEST_COUNT = Counter(
    'http_requests_total',
    'Total number of HTTP requests',
    ['method', 'endpoint', 'status_code']
)

EXCEPTION_COUNT = Counter(
    'http_exceptions_total',
    'Total number of exceptions',
    ['exception_type']
)

DB_QUERY_DURATION = Histogram(
    'db_query_duration_seconds',
    'Database query duration in seconds',
    ['query_type']
)

ACTIVE_REQUESTS = Gauge(
    'http_active_requests',
    'Number of active HTTP requests',
    ['endpoint']
)

def monitor_requests(f):
    """Decorator to monitor request duration and count."""
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if request.endpoint == 'metrics':
            return f(*args, **kwargs)
            
        start_time = time.time()
        endpoint = request.endpoint or 'unknown'
        
        # Track active requests
        ACTIVE_REQUESTS.labels(endpoint=endpoint).inc()
        
        try:
            response = f(*args, **kwargs)
            status_code = response[1] if isinstance(response, tuple) and len(response) > 1 else 200
            
            # Record metrics
            duration = time.time() - start_time
            REQUEST_DURATION.labels(
                method=request.method,
                endpoint=endpoint,
                status_code=status_code
            ).observe(duration)
            
            REQUEST_COUNT.labels(
                method=request.method,
                endpoint=endpoint,
                status_code=status_code
            ).inc()
            
            # Store duration for logging
            g.request_duration = duration
            
            return response
            
        except Exception as e:
            EXCEPTION_COUNT.labels(exception_type=type(e).__name__).inc()
            raise
            
        finally:
            ACTIVE_REQUESTS.labels(endpoint=endpoint).dec()
    
    return decorated_function

def monitor_db_query(query_type):
    """Decorator to monitor database query duration."""
    def decorator(f):
        @wraps(f)
        def decorated_function(*args, **kwargs):
            start_time = time.time()
            try:
                return f(*args, **kwargs)
            finally:
                duration = time.time() - start_time
                DB_QUERY_DURATION.labels(query_type=query_type).observe(duration)
        return decorated_function
    return decorator

def init_monitoring(app):
    """Initialize monitoring for the Flask app."""
    # Initialize Prometheus metrics
    metrics.init_app(app)
    
    # Add default metrics
    metrics.info('app_info', 'Application info', version='1.0.0')
    
    # Add health check endpoint
    @app.route('/health')
    def health_check():
        """Health check endpoint."""
        return {'status': 'healthy'}, 200
    
    # Add readiness check endpoint
    @app.route('/readiness')
    def readiness_check():
        """Readiness check endpoint."""
        # Add database connection check
        try:
            from app import db
            db.session.execute('SELECT 1')
            return {'status': 'ready'}, 200
        except Exception as e:
            return {'status': 'not ready', 'error': str(e)}, 503
    
    return app
