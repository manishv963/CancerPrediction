# Importing essential libraries
from flask import Flask, render_template, request
import pickle
import numpy as np
from num2words import num2words



app = Flask(__name__)


@app.route('/')
def home():
	return render_template('login.html')

@app.route('/login')
def login():
	return render_template('login.html')

@app.route('/signup')
def signup():
	return render_template('signup.html')


    
if __name__ == '__main__':
	app.run(debug=True)