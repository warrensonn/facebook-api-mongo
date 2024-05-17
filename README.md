# Projet API avec MongoDB et Node.js

Ce projet consiste à créer une API REST utilisant Node.js comme serveur et MongoDB comme base de données.

## Étapes réalisées :

### 1. Création de la base de données MongoDB et insertion de données de test :

J'ai créé une base de données avec mongosh (mongo shell) et créé une collection
users dans laquelle j'ai inséré deux users pour des tests

- use facebook
- db.users.insertOne({ name: "warren", surname: "bev", email: "test@example.com", password: "password1" })
- db.users.insertOne({ name: "John", surname: "Doe", email: "john.doe@example.com", password: "password123" })


### 2. Configuration du serveur Node.js avec Express :

J'ai créé mon projet npm et installé les dépendances
- npm init -y
- npm install express mongoose dotenv

J'ai configuré les scripts de lancement et lancé le serveur en mode développement
- npm run dev

j'ai défini des routes pour get et post les utilisateurs dans le fichier `user.js` dans le dossier `routes`.


### 3. Connexion à la base de données MongoDB :

J'ai utilisé MongoClient pour me connecter à la base de données une fois l'avoir lancé.
- mongod
- création du fichier db.js avec gestion des erreurs de connexion


### 4. Gestion des opérations CRUD pour les utilisateurs :

- Création des routes dans le fichier `user.js` pour gérer les opérations CRUD (Create, Read, Update, Delete) pour les utilisateurs.
- Utilisation de Mongoose pour interagir avec la base de données MongoDB et faire ces opérations


### 5. Test de l'API avec Postman ou un navigateur :

- Test de l'API en envoyant des requêtes HTTP à l'adresse `http://localhost:5000/api/users` pour les opérations et avec postman directement sur vs code.
