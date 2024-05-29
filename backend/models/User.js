const mongoose = require('mongoose')

const uniqueValidator = require('mongoose-unique-validator')

//Un utilisateur a un pseudo, un mot de passe et un highscore
const userSchema = mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    highscore: { type: Number, required: true, default: 0 },
  },
  {
    versionKey: false,
  }
)

userSchema.plugin(uniqueValidator)

module.exports = mongoose.model('User', userSchema)
