const db = require('../models');

// create tabel pesanan

const addPemesan = async (req, res) => {
    
    try {
        let info = {
            nama                 : req.body.nama,
            nik                  : req.body.nik,
            email                : req.body.email,
            alamat               : req.body.alamat,
            nomorHandphone       : req.body.nomorHandphone
        }
    
        const Pemesan = await db.tabelpemesan.create(info)
        res.status(200).send(Pemesan)
        console.log(Pemesan)
    } catch (error) {
        console.log(error)
    }

}

// 2. get single pesanan

const getOnePemesan = async (req, res) => {
    let id       = req.params.id
    let pemesan  = await db.tabelpemesan.findOne({ where : { id : id }})
    res.status(200).send(pemesan)
}

module.exports = {
    addPemesan,
    getOnePemesan
};