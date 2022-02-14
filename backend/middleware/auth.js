// Récupération du modèle jsonwebtoken
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {

    //Recupération du token dans le header
    const token = req.headers.authorization.split(' ')[1];
    //Décodage du token
    const decodedToken = jwt.verify(token, '${process.env.TOKEN}');
    //Récupération de l'userID dans le token précédemment décodé
    const userId = decodedToken.userId;

    // Vérification de la concordance entre les clés utilisateurs du token et de la requête
    if (req.body.userId && req.body.userId !== userId) {
      //Levée d'erreur si la concordance est fausse
      throw 'User ID non valable !';
    } else {
      //Action suivante si OK
      next();
    }


  } catch (error) {
    res.status(401).json({ error: error | 'Requête non authentifiée !' });
  }
};
