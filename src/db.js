const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'facebook';


async function connectToMongoDB() {
    try {
        const client = await MongoClient.connect(url);
        console.log("Connecté");
        return client.db(dbName);
    } catch (err) {
        console.log("Erreur de connexion à MongoDB : ", err);
    }
}

module.exports = connectToMongoDB;
