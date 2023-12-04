const pesananController = require('../controllers/pesananController')

const router = require('express').Router();

router.post('/addPesanan', pesananController.addPesanan)
router.get('/:id', pesananController.getOnePesanan)


module.exports = router;