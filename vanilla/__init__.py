from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources = {r'/v1/*': {"origins": "*"}})

@app.route('/v1/countries')
def returnCountries():
    countries = ["India", "Indonesia", "Africa", "United States"]
    return jsonify(countries = countries)

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000)
    app.debug = True