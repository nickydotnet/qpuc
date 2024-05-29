const express = require('express')
const app = express()
const mongoose = require('mongoose')
const connect = require('./connection')
const Question = require('./models/Question')

const userRoutes = require('./routes/user')
const questionRoutes = require('./routes/question')

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  )
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  )
  next()
})

mongoose
  .connect(connect().toString(), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'))

app.use(express.json())

app.use('/api/auth', userRoutes)
app.use('/api/question', questionRoutes)

module.exports = app
