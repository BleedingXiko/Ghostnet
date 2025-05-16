# GhostNet

A visual, interactive network where users anonymously publish and discover GhostHub tunnel instances.

## Overview

GhostNet allows users to share and discover GhostHub tunnel URLs in a dynamic, visual network graph. Posts are organized by tags into "subnets" creating an organic, self-organizing directory of anonymous media tunnels.

- **Anonymous Publishing**: No accounts required - just generate an API key and start sharing
- **Visual Network**: Dynamic 3D graph visualization of all tunnels
- **Tag Clustering**: Posts with similar tags form visual clusters
- **Upvote System**: Popularity increases node size and visibility

## Project Structure

- `backend/`: Flask API with SQLite database
- `frontend/`: Svelte + Three.js + TailwindCSS application

## Getting Started

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment (optional but recommended):
   ```bash
   python -m venv venv
   # Windows
   .\venv\Scripts\activate
   # macOS/Linux
   source venv/bin/activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the Flask application:
   ```bash
   python app.py
   ```
   
   The backend API will be available at http://localhost:5000/api

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   
   The frontend will be available at http://localhost:5173 (or another port if that one is in use)

## Environment Variables

### Backend (Flask)

You can customize the backend by setting these environment variables:

| Variable | Description | Default |
|----------|-------------|---------|
| `DATABASE_URL` | Database connection string | `sqlite:///ghostnet.db` |
| `CORS_ORIGINS` | Allowed origins for CORS | `*` (all origins) |
| `DEBUG` | Enable debug mode | `True` |
| `PORT` | Port to run the Flask server | `5000` |
| `HOST` | Host to bind the server | `0.0.0.0` |
| `SECRET_KEY` | Secret key for session encryption | `dev_key_please_change_in_production` |

Example:
```bash
# Windows
set DATABASE_URL=sqlite:///custom_path.db
set PORT=8000

# macOS/Linux
export DATABASE_URL=sqlite:///custom_path.db
export PORT=8000

python app.py
```

### Frontend (Vite/Svelte)

Environment variables for the frontend must be prefixed with `VITE_`:

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | Base URL for API requests | `http://localhost:5000/api` |
| `VITE_API_KEY_STORAGE_KEY` | Local storage key for API key | `ghostNetApiKey` |
| `VITE_APP_NAME` | Application name | `GhostNet` |

**Method 1**: Create a `.env` file in the frontend directory:
```
VITE_API_BASE_URL=http://example.com/api
```

**Method 2**: Set variables before running the server:
```bash
# Windows
set VITE_API_BASE_URL=http://example.com/api
# macOS/Linux
export VITE_API_BASE_URL=http://example.com/api

npm run dev
```

## Deployment

For deployment, you should set appropriate environment variables in your hosting platform.

### Example: Deploying to Heroku

For the backend:
```bash
heroku create ghostnet-backend
heroku config:set SECRET_KEY=your_secure_random_key
git subtree push --prefix backend heroku main
```

For the frontend (assuming using Netlify or similar):
1. Build the frontend with proper environment variables:
   ```bash
   VITE_API_BASE_URL=https://ghostnet-backend.herokuapp.com/api npm run build
   ```
2. Deploy the built files from `dist/` directory

## License

This project is available as open source under the terms of the MIT License. 