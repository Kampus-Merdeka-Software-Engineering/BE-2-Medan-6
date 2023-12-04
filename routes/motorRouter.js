const motorController = require('../controllers/motorController')

const router = require('express').Router()

router.get('/allMotor', motorController.getAllMotor)
router.get('/:id', motorController.getOneMotor)


module.exports = router