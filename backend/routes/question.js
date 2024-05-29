const express = require('express')
const router = express.Router()

const questionCtrl = require('../controllers/question')

//routes pour accéder aux différentes fonctions liées aux fonctions
router.get('/', questionCtrl.getAllQuestions)
router.get('/:id', questionCtrl.getOneQuestion)

router.post('/addQ', questionCtrl.addQuestion)

module.exports = router
