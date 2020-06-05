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
import hashlib 
import time
import json


# Set constants
RESUMEPATH = "resumes/"


# Initiate the flask app
app = Flask(__name__)



# Root path
@app.route('/')
def index():
    # Print index.html
    return render_template("index.html")
    


@app.route('/api', methods=["POST"])
def api():
    # Decode the payload sent by the frontend
    data = request.data.decode("utf-8")

    # Generate a hash for the CV
    epoch = str(time.time())
    s = epoch + data
    cvhash = hashlib.md5(s.encode()).hexdigest()

    # Save data
    with open(RESUMEPATH + cvhash, 'w') as resume_file:
        resume_file.write(data)
    
    # Add the hash to the payload
    data = json.loads(data)
    data["hash"] = cvhash

    return json.dumps(data)



@app.route('/cv', methods=["GET"])
def cv_show():
    cv_id = request.args.get('id')

    try:
        with open(RESUMEPATH + cv_id, 'r') as resume_file:
            data = resume_file.read()
    except:
        data = "{}"

    return data



if __name__ == '__main__':
    app.run(port=8003)