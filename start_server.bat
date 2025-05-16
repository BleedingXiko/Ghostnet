@echo off
REM Ensure this script is run from the project root directory (GhostNet/GhostNet)

echo Ensuring backend dependencies are installed...
cd backend
python -m pip install -r requirements.txt
cd ..

echo Starting GhostNet Backend...
echo IMPORTANT: Make sure you have built the frontend into 'backend/static' before running this script.

set FLASK_APP=backend.app
REM FLASK_ENV=development is often set, but your config.py handles DEBUG, HOST, PORT

echo Trying to run with: python -m flask run --host=0.0.0.0 --port=5001
python -m flask run --host=0.0.0.0 --port=5001

REM Previously: python -m flask run
REM Flask's default is to listen only on 127.0.0.1:5000, but we want to expose it
REM on all network interfaces (0.0.0.0) and use port 5001 for consistency

REM To specify host and port if not picked up from config.py by flask run:
REM python -m flask run --host=%HOST% --port=%PORT%
REM (You'd need to set HOST and PORT env vars or define them in config.py and ensure Flask uses them) 