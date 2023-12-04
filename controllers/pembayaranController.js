const db = require('../models');

// create tabel pesanan

const addPembayaran = async (req, res) => {
    
    let info = {
        virtualAccount             : req.body.virtualAccount,
        totalHarga                 : req.body.totalHarga,
        lunasAtauTidak             : req.body.lunasAtauTidak,
        tabelpemesanId             : req.body.tabelpemesanId,
    }

    const Pembayaran = await db.tabelpembayaran.create(info)
    res.status(200).send(Pembayaran)
    console.log(Pembayaran)

}

module.exports = {
    addPembayaran
};