const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.post('/', async (req, res) => {
    try {
        const { name, surname, email, password } = req.body;

        if (!name || !surname || !email || !password) {
            return res.status(400).json({ message: "Tous les champs sont requis" });
        }

        const newUser = new User({ name, surname, email, password });
        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        console.error("Erreur lors de la création de l'utilisateur :", error);
        res.status(500).json({ message: "Erreur interne du serveur" });
    }
});

module.exports = router;
