const express = require('express')
const router = express.Router()

const userCtrl = require('../controllers/user')

//Routes pour accéder aux différentes fonctions liées à l'utilisateur
router.get('/', userCtrl.getAllUsers)
router.get('/:id', userCtrl.getOneUser)

router.post('/signup', userCtrl.signup)

router.put('/:id', userCtrl.updateScore)

module.exports = router
