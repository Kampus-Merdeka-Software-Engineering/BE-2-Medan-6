const mobilController = require('../controllers/mobilController')

const router = require('express').Router()

router.get('/allMobil', mobilController.getAllMobil)
router.get('/:id', mobilController.getOneMobil)

module.exports = router