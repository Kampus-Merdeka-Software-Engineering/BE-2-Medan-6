const pemesanController = require('../controllers/pemesanController')

const router = require('express').Router();

router.post('/addPemesan', pemesanController.addPemesan)
router.get('/:id', pemesanController.getOnePemesan)


module.exports = router;