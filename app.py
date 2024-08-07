# Import required libraries
from flask import Flask, render_template

# Create a Flask application instance
app = Flask(__name__)

# Define the route for the home page
@app.route('/')
def home():
    return render_template('index.html')

# Check if the script is run directly, and not imported as a module
if __name__ == '__main__':
    app.run(debug=True)
