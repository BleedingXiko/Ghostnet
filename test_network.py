from flask import Flask
import socket

app = Flask(__name__)

@app.route('/')
def home():
    return f"Test server running on {socket.gethostname()} - Network connectivity works!"

@app.route('/api/test')
def api_test():
    return {"status": "ok", "message": "API endpoint is working!"}

if __name__ == '__main__':
    print("Starting test server on 0.0.0.0:5001...")
    print(f"Access from other devices at: http://{socket.gethostbyname(socket.gethostname())}:5001")
    app.run(host='0.0.0.0', port=5001, debug=True) 