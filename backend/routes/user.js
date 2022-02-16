// Création de la route permettant les actions liées aux utilisateurs

const express = require('express');
// importation module route dans express
const router = express.Router();
// création chemin user dans les controllers
const userCtrl = require('../controllers/user');
// les routeurs signup et login seront en méthode post
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
// exportation
module.exports = router;