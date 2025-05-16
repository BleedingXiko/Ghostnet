#!/bin/bash
# Ensure this script is run from the project root directory (GhostNet/GhostNet)

echo "Ensuring backend dependencies are installed..."
cd backend
python -m pip install -r requirements.txt
cd ..

echo "Starting GhostNet Backend..."
echo "IMPORTANT: Make sure you have built the frontend into 'backend/static' before running this script."

export FLASK_APP=backend.app
# export FLASK_ENV=development # Your config.py handles DEBUG, HOST, PORT

echo "Trying to run with: python -m flask run"
python -m flask run --host=$HOST --port=$PORT

# To specify host and port if not picked up from config.py by flask run:
# python -m flask run --host=$HOST --port=$PORT
# (You'd need to set HOST and PORT env vars or define them in config.py and ensure Flask uses them) 