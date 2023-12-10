const db = require('../models')

// create main table

const Mobil = db.tabel_mobil

// main work

// add Mobil
const addMobil = async (req, res) => {
    
    try {
        let info = {
            namaMobil    : req.body.namaMobil,
            harga        : req.body.harga,
            tipeMobil    : req.body.tipeMobil,
            bagasi       : req.body.bagasi,
            jumlahMuatan : req.body.jumlahMuatan,
        }
    
        const Mobil = await db.tabel_mobil.create(info)
        res.status(200).send(Mobil)
        console.log(Mobil)
    } catch (error) {
        console.log(error)
    }


}

// 1. get all mobil

const getAllMobil = async (req, res) => {
    try {
        let mobils  = await Mobil.findAll({})
        res.status(200).send(mobils)
    } catch (error) {
        
    }
}

// 2. get single mobil

const getOneMobil = async (req, res) => {
    try {
        let id = req.params.id
        let mobil  = await Mobil.findOne({ where : { id : id }})
        res.status(200).send(mobil)
    } catch (error) {
        
    }
}

module.exports = {
    addMobil,
    getAllMobil,
    getOneMobil
};