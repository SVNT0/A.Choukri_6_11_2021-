// Création des routes permettant les actions liées aux sauces

const express = require('express');
const router = express.Router();
// définition des chemins d'authentification, de multer et des sauces qui seront utile au router
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const sauceCtrl = require('../controllers/sauce');


// Introduction des routes avec son CRUD 
router.get('/', auth, sauceCtrl.getAllSauce);
router.post('/', auth, multer, sauceCtrl.createSauce);
router.get('/:id', auth, sauceCtrl.getOneSauce);
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);
router.post('/:id/like', auth, sauceCtrl.likeSauce);

module.exports = router;