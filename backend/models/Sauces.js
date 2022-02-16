// Création du type de données de la base concernant les Sauces
// importation package de Mongoose
const mongoose = require('mongoose');
// Défintion du schéma de mongoose en JSON (string, number ou array)
const sauceSchema = mongoose.Schema({
    userId: { type: String, require: true },
    name: { type: String, require: true },
    manufacturer: { type: String, require: true },
    description: { type: String, require: true },
    mainPepper: { type: String, require: true },
    imageUrl: { type: String },
    heat: { type: Number, require: true },
    likes: { type: Number, require: true, default: 0 },
    dislikes: { type: Number, require: true, default: 0 },
    usersLiked: { type: [String] },
    usersDisliked: { type: [String] }
});

module.exports = mongoose.model('Sauce', sauceSchema);