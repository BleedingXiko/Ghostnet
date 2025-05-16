from datetime import datetime, timezone
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import event
from sqlalchemy.orm import validates
import re

# Initialize SQLAlchemy with no settings
# The actual app initialization will be done in app.py
db = SQLAlchemy()

class BaseModel:
    """Base model class that provides common functionality to all models."""
    
    def to_dict(self):
        """Convert model instance to dictionary."""
        result = {}
        for column in self.__table__.columns:
            value = getattr(self, column.name)
            # Convert datetime to ISO format string
            if isinstance(value, datetime):
                value = value.isoformat()
            result[column.name] = value
        return result
    
    @classmethod
    def get_by_id(cls, id):
        """Get a model instance by its ID."""
        return cls.query.get(id)


class ApiKey(db.Model, BaseModel):
    """API Key model for authentication."""
    __tablename__ = 'api_key'
    
    id = db.Column(db.Integer, primary_key=True)
    key_hash = db.Column(db.String(255), unique=True, nullable=False)
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc), nullable=False)
    is_active = db.Column(db.Boolean, default=True, nullable=False)
    last_used_at = db.Column(db.DateTime, nullable=True)
    
    # Relationships
    posts = db.relationship('Post', backref='api_key_ref', lazy=True)
    
    def __repr__(self):
        return f'<ApiKey {self.id}>'


class Post(db.Model, BaseModel):
    """Post model for storing tunnel information."""
    __tablename__ = 'post'
    
    id = db.Column(db.Integer, primary_key=True)
    tunnel_url = db.Column(db.String(512), nullable=False)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=True)
    tags = db.Column(db.String(255), nullable=True)
    provider = db.Column(db.String(50), nullable=False)
    upvotes = db.Column(db.Integer, default=0, nullable=False)
    api_key_hash = db.Column(db.String(255), db.ForeignKey('api_key.key_hash'), nullable=False)
    is_alive = db.Column(db.Boolean, default=True, nullable=False)
    last_checked = db.Column(db.DateTime, nullable=True)
    failed_checks = db.Column(db.Integer, default=0, nullable=False)
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc), nullable=False)
    updated_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc), nullable=False)
    
    # Indexes
    __table_args__ = (
        db.Index('idx_post_created_at', 'created_at'),
        db.Index('idx_post_provider', 'provider'),
        db.Index('idx_post_is_alive', 'is_alive'),
    )
    
    @validates('tunnel_url')
    def validate_tunnel_url(self, key, url):
        """Validate tunnel URL format."""
        if not url:
            raise ValueError("Tunnel URL is required")
        # Basic URL validation - can be enhanced
        if not url.startswith(('http://', 'https://')):
            raise ValueError("Tunnel URL must start with http:// or https://")
        return url
    
    @validates('provider')
    def validate_provider(self, key, provider):
        """Validate provider is one of the allowed values."""
        if provider not in ['Pinggy', 'Cloudflare']:
            raise ValueError("Provider must be either 'Pinggy' or 'Cloudflare'")
        return provider
    
    @property
    def tag_list(self):
        """Return tags as a list."""
        if not self.tags:
            return []
        return [tag.strip() for tag in self.tags.split(',') if tag.strip()]
    
    @tag_list.setter
    def tag_list(self, value):
        """Set tags from a list."""
        if isinstance(value, list):
            self.tags = ','.join(str(tag).strip() for tag in value)
        else:
            self.tags = str(value) if value is not None else None
    
    def __repr__(self):
        return f'<Post {self.id}: {self.title}>'


@event.listens_for(Post, 'before_insert')
@event.listens_for(Post, 'before_update')
def update_timestamps(mapper, connection, target):
    """Update timestamps automatically."""
    now = datetime.now(timezone.utc)
    if not target.created_at:
        target.created_at = now
    target.updated_at = now
