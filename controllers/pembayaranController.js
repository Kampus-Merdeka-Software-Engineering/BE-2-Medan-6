const db = require('../models');

// create tabel pesanan

const addPembayaran = async (req, res) => {
    try {
        let info = {
            virtualAccount             : req.body.virtualAccount,
            totalHarga                 : req.body.totalHarga,
            lunasAtauTidak             : req.body.lunasAtauTidak,
            tabelpemesanId             : req.body.tabelpemesanId,
        }
    
        const Pembayaran = await db.tabelpembayaran.create(info)
        res.status(200).send(Pembayaran)
        console.log(Pembayaran)
    } catch (error) {
        console.log(error)
    }
}

const allPembayaran = async (req, res) => {
    try {
        let Pembayaran  = await db.tabelpembayaran.findAll({})
        res.status(200).send(Pembayaran)
    } catch (error) {
        
    }
}

module.exports = {
    addPembayaran,
    allPembayaran
};