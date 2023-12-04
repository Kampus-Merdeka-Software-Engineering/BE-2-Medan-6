const pembayaranController = require('../controllers/pembayaranController')

const router = require('express').Router();

router.post('/addPembayaran', pembayaranController.addPembayaran)

module.exports = router;