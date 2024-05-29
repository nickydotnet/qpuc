const mongoose = require('mongoose')

const uniqueValidator = require('mongoose-unique-validator')

//Une question a un énoncé, une réponse, 3 fausses réponses, un nombre de point, un thème et est créé par une personne
const questionSchema = mongoose.Schema(
  {
    question_statement: { type: String, required: true },
    question_answer: { type: String, required: true },
    fake1: { type: String, required: true },
    fake2: { type: String, required: true },
    fake3: { type: String, required: true },
    points: { type: Number, required: true },
    theme: { type: String, required: true },
    credits: { type: String, required: true },
  },
  {
    versionKey: false,
  }
)

questionSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Question', questionSchema)
