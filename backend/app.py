from flask import Flask, request, jsonify
from flask_cors import CORS
import re
from datetime import datetime

app = Flask(__name__)
CORS(app)

def generate_user_id(name="john_doe"):
    """Generate user ID in the format fullname_ddmmyyyy"""
    return f"{name}_{datetime.now().strftime('%d%m%Y')}"

def process_data(data):
    """Process input data and categorize into numbers and alphabets"""
    numbers = [str(item) for item in data if str(item).isdigit()]
    alphabets = [str(item) for item in data if str(item).isalpha()]
    
    highest_alphabet = max(alphabets, key=str.lower) if alphabets else {}
    
    return {
        "is_success": True,
        "user_id": generate_user_id(),
        "email": "john@xyz.com",
        "roll_number": "ABCD123",
        "numbers": numbers,
        "alphabets": alphabets,
        "highest_alphabet": [highest_alphabet] if highest_alphabet else {}
    }

@app.route('/bfhI', methods=['GET', 'POST'])
def handle_request():
    if request.method == 'GET':
        return jsonify({"operation_code": 1}), 200
    
    if request.method == 'POST':
        try:
            data = request.json.get('data', [])
            response = process_data(data)
            return jsonify(response), 200
        except Exception as e:
            return jsonify({
                "is_success": False,
                "error": str(e)
            }), 400

if __name__ == '__main__':
    app.run(debug=True, port=5000)
