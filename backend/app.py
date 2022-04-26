from crypt import methods
from flask import Flask, request
from flask.json import jsonify
from pymongo import MongoClient
from flask_cors import CORS
import json
from decouple import config

app = Flask(__name__)
cors = CORS(app)
#app.config['CORS_HEADERS'] = 'Content-Type'

mongoClient = MongoClient(config('mongodb_key'),
                          tls=True, tlsAllowInvalidCertificates=True)
db = mongoClient.get_database('test')
documento = db.get_collection('reports')


# @app.route('/getUsers/<name>/', methods=["POST"])
# def addname(name):
#     names_col.insert_one({"name": name.lower()})
#     return redirect(url_for('getnames'))


@app.route('/getUsers', methods=["POST"])
def getnames():
    client_name = json.loads(request.data)
    client_name = client_name["client_name"]

    if documento.find({"client_name": client_name}):
        for name in documento.find({}).sort("client_name"):
            print(name)

            documento.insert_one({"client_name": "soy_una_prubea"})

            documento.delete_one({"client_name": "soy_una_prubea"})

            var_filter = {"client_name": client_name}
            user = {"$set": {"last_name": "Rosales",  "age": "40"}}
            documento.update_one(var_filter, user)

            return json.dumps(name["client_name"])


if __name__ == "__main__":
    app.run(debug=True)
