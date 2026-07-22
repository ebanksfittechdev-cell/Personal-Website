from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os
import requests

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', 'sqlite:///contact.db')
db = SQLAlchemy(app)

allowed_origins = os.environ.get('ALLOWED_ORIGIN', 'http://localhost:5173').split(',')
CORS(app, origins=allowed_origins)

# Pushover config
PUSHOVER_USER_KEY = os.environ.get("PUSHOVER_USER_KEY")
PUSHOVER_APP_TOKEN = os.environ.get("PUSHOVER_APP_TOKEN")
PUSHOVER_URL = "https://api.pushover.net/1/messages.json"


class ContactSubmission(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    message = db.Column(db.Text, nullable=False)


def send_pushover_notification(name, email, message):
    payload = {
        "token": PUSHOVER_APP_TOKEN,
        "user": PUSHOVER_USER_KEY,
        "title": f"New Contact Form Submission",
        "message": f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"
    }

    try:
        response = requests.post(PUSHOVER_URL, data=payload)
        response.raise_for_status()
    except Exception as e:
        print(f"Pushover notification failed: {e}")


@app.route('/api/contact', methods=['POST'])
def submit_contact():
    data = request.json

    submission = ContactSubmission(
        name=data['name'],
        email=data['email'],
        message=data['message']
    )
    db.session.add(submission)
    db.session.commit()

    send_pushover_notification(data['name'], data['email'], data['message'])

    return jsonify({'success': True}), 201


with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True)


