const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./src/routes/user');
const connectToMongoDB = require('./src/db');

dotenv.config();

const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

connectToMongoDB().then((db) => {
    if (db) {
        app.locals.db = db;  // Stocker la connexion de la base de données dans les locals de l'application

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } else {
        console.log("Failed to connect to the database. Server not started.");
    }
}).catch(err => {
    console.error("Database connection error:", err);
    process.exit(1);  // Arrêter le processus en cas d'erreur de connexion à la base de données
});
