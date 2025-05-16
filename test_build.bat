@echo off
echo Building frontend to check if dist folder is created correctly...
cd frontend
call npm install
call npm run build
echo.
echo Checking if dist folder was created:
if exist dist (
  echo SUCCESS: dist folder created!
  dir dist
) else (
  echo ERROR: dist folder not created! Build may have failed.
) 