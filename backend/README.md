# GhostNet Backend - Docker Setup

This document explains how to run the GhostNet backend using Docker.

## Prerequisites

- [Docker](https://www.docker.com/get-started) installed on your system
- [Docker Compose](https://docs.docker.com/compose/install/) (usually included with Docker Desktop)

## Running with Docker

### Option 1: Using Docker Compose (Recommended)

1. Navigate to the backend directory:
   ```
   cd path/to/GhostNet/backend
   ```

2. Build and start the container:
   ```
   docker-compose up --build
   ```

3. The API will be available at http://localhost:5001

To run in detached mode (in the background):
```
docker-compose up -d
```

To stop the containers:
```
docker-compose down
```

### Option 2: Using Docker Directly

1. Build the Docker image:
   ```
   docker build -t ghostnet-backend .
   ```

2. Run the container:
   ```
   docker run -p 5001:5001 -v $(pwd):/app ghostnet-backend
   ```
   
   On Windows PowerShell, use:
   ```
   docker run -p 5001:5001 -v ${PWD}:/app ghostnet-backend
   ```

## Environment Variables

You can customize the application by setting environment variables in the docker-compose.yml file:

- `FLASK_APP`: The entry point to your Flask application
- `FLASK_DEBUG`: Set to 1 for development mode
- `SECRET_KEY`: Secret key for session security
- `DATABASE_FILENAME`: Name of the SQLite database file

## Database Persistence

The database is stored in a Docker volume to ensure data persistence between container restarts.

## Production Deployment

For production deployment:

1. Set a strong `SECRET_KEY` in docker-compose.yml
2. Set `FLASK_DEBUG=0` to disable debug mode
3. Consider using a reverse proxy like Nginx for SSL termination
