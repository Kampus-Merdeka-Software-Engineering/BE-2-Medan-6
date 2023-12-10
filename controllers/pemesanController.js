const db = require('../models');

// create tabel pesanan

const addPemesan = async (req, res) => {

    try {
        let info = {
            nama                 : req.body.nama,
            nik                  : req.body.nik,
            email                : req.body.email,
            nomorHandphone       : req.body.nomorHandphone,
            tabelMobilId         : req.body.tabelMobilId,
            tabelmotorId         : req.body.tabelmotorId,
            tabelpesananId       : req.body.tabelpesananId,
        }
    
        const Pemesan = await db.tabelpemesan.create(info)
        res.status(200).send(Pemesan)
        console.log(Pemesan)
    } catch (error) {
        
    }
    

}

// 2. get single pesanan

const getOnePemesan = async (req, res) => {
    try {
        let id       = req.params.id
        let pemesan  = await db.tabelpemesan.findOne({ where : { id : id }})
        res.status(200).send(pemesan)
    } catch (error) {
        
    }
}

module.exports = {
    addPemesan,
    getOnePemesan
};