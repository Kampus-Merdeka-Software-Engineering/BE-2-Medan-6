const motorController = require('../controllers/motorController')

const router = require('express').Router()

router.post('/addMotor', motorController.addMotor)
router.get('/allMotor', motorController.getAllMotor)
router.get('/:id', motorController.getOneMotor)


module.exports = router