const db = require('../models')

// create main table

const Mobil = db.tabel_mobil

// main work

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
    getAllMobil,
    getOneMobil
};