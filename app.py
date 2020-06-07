#      _       _        
#  ___ (_) __ _| | _____  sjaks@github
# / __|| |/ _` | |/ / __| jaks.fi
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
import string
import random


# Set constants
RESUMEPATH = "resumes/"


# Initiate the flask app
app = Flask(__name__)



# Root path
@app.route('/')
def index():
    try:
        cv_id = request.args.get('edit')[18:]
        cv_secret = request.args.get('edit')[0:17]
        
        # TODO: implement secret checking

        with open(RESUMEPATH + cv_id, 'r') as resume_file:
            data = resume_file.read()

        
    except:
        data = ""

    # Print index.html
    return render_template("index.html", cv_data=data)
    


@app.route('/api', methods=["POST"])
def api():
    # Decode the payload sent by the frontend
    data = request.data.decode("utf-8")

    # Generate a hash for the CV
    rnd = ''.join(random.choices(string.ascii_uppercase + string.digits, k=18))
    epoch = str(time.time())
    s = epoch + data
    cvhash = hashlib.md5(s.encode()).hexdigest()
    secret = rnd + cvhash

    # Save data
    with open(RESUMEPATH + cvhash, 'w') as resume_file:
        resume_file.write(data)
    
    # Add the hash to the payload
    data = json.loads(data)
    data["hash"] = cvhash
    data["secret"] = secret

    return json.dumps(data)



@app.route('/cv', methods=["GET"])
def cv_show():
    try:
        cv_id = request.args.get('id')
        with open(RESUMEPATH + cv_id, 'r') as resume_file:
            data = resume_file.read()
    except:
        data = "{}"

    return data



if __name__ == '__main__':
    app.run(port=8003)