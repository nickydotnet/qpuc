const User = require('../models/User')

//Permet d'inscrire un utilisateur
exports.signup = (req, res, next) => {
  //On créé un utilisateur à partir du corps de la requête
  const user = new User({
    ...req.body,
  })
  //On l'enregistre et si tout ce passe bien on confirme avec un message et sinon une erreur
  user
    .save()
    .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
    .catch((error) => res.status(400).json({ error }))
}

//Permet de récupérer les utilisateurs
exports.getAllUsers = (req, res, next) => {
  //On récupères tous les utilisateurs et si tout va bien on envoie un message de confirmation et sinon une erreur
  User.find()
    .then((users) => {
      res.status(200).json(users)
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      })
    })
}

//Permet de récupérer un utilisateur
exports.getOneUser = (req, res, next) => {
  //On récupère un utilisateur dont l'id correspond à celui passé dans la requête, si tout va bien on confirme sinon on renvoie une erreur
  User.findOne({
    _id: req.params.id,
  })
    .then((user) => {
      res.status(200).json(user)
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      })
    })
}

//Permet de modifier le score d'un utilisateur
exports.updateScore = (req, res, next) => {
  //On modifie le score de l'utilisteur dont l'id correspond à celui passé en requête.
  //Les nouvelles informations de l'utilisateur sont celles passées dans le corps de la requête
  User.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Score modifié !' }))
    .catch((error) => res.status(400).json({ error }))
}
