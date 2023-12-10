const pembayaranController = require('../controllers/pembayaranController')

const router = require('express').Router();

router.post('/addPembayaran', pembayaranController.addPembayaran)
router.get('/allPembayaran', pembayaranController.allPembayaran)


module.exports = router;