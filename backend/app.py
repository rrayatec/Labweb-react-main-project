from crypt import methods
from flask import Flask, redirect, url_for, request
from flask.json import jsonify
from pymongo import MongoClient
from flask_cors import CORS
import json

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

mongoClient = MongoClient('mongodb://127.0.0.1:27017')
db = mongoClient.get_database('test')
names_col = db.get_collection('reports')


@app.route('/getUsers/<name>/', methods=["POST"])
def addname(name):
    names_col.insert_one({"name": name.lower()})
    return redirect(url_for('getnames'))


@app.route('/getUsers', methods=["POST"])
def getnames():
    client_name = json.loads(request.data)
    client_name = client_name["client_name"]

    if names_col.find({"client_name": client_name}):
        for name in names_col.find({}).sort("client_name"):
            print(name)
            return json.dumps(name["client_name"])


if __name__ == "__main__":
    app.run(debug=True)
