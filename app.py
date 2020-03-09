#      _       _        
#  ___ (_) __ _| | _____  sjaks@github
# / __|| |/ _` | |/ / __| s.jaks.fi
# \__ \| | (_| |   <\__ \ ------------
# |___// |\__,_|_|\_\___/ ansio
#    |__/                
#
# BRIEF:
# Main backend for ansio


# Import libraries
from flask import Flask, render_template
from flask import request
import requests


# Initiate the flask app
app = Flask(__name__)



# Root path
@app.route('/')
def index():
    # Print index.html
    return render_template("index.html")
    


@app.route('/api', methods=["POST"])
def api():
    data = request.data.decode("utf-8")
    print(data)
    return "success"



if __name__ == '__main__':
    app.run(port=8003)