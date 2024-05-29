const Question = require('../models/Question')

//Permet d'ajouter une question dans la base de donnée
exports.addQuestion = (req, res, next) => {
  //On créé une question composé des éléments du corps de la requête
  const question = new Question({
    ...req.body,
  })
  //On sauvegarde la question, si tout fonctionne on renvoie un message de confirmation et sinon une erreur
  question
    .save()
    .then(() => res.status(201).json({ message: 'Question créée !' }))
    .catch((error) => res.status(400).json({ error }))
}

//Permet de récupérer toutes les questions
exports.getAllQuestions = (req, res, next) => {
  //On récupère les questions puis on envoie un message de confirmation sinon une erreur
  Question.find()
    .then((users) => {
      res.status(200).json(users)
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      })
    })
}

//Permet de récupérer une question
exports.getOneQuestion = (req, res, next) => {
  //On récupère une question qui a pour id l'id passé dans la requête
  Question.findOne({
    _id: req.params.id,
  })
    //Puis on envoie un message de confirmation ou d'erreur si elle n'est pas trouvée
    .then((user) => {
      res.status(200).json(user)
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      })
    })
}
