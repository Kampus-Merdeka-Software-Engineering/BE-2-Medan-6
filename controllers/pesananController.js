const db = require('../models');

// create tabel pesanan

const addPesanan = async (req, res) => {
    
    let info = {
        tanggalMulaiSewa    : req.body.tanggalMulaiSewa,
        waktuMulai          : req.body.waktuMulai,
        tanggalSelesai      : req.body.tanggalSelesai,
        waktuSelesai        : req.body.waktuSelesai,
        lokasi              : req.body.lokasi
    }

    const Pesanan = await db.tabelpesanan.create(info)
    res.status(200).send(Pesanan)
    console.log(Pesanan)

}

// 2. get single pesanan

const getOnePesanan = async (req, res) => {
    let id     = req.params.id
    let motor  = await db.tabelpesanan.findOne({ where : { id : id }})
    res.status(200).send(motor)
}

module.exports = {
    addPesanan,
    getOnePesanan
};