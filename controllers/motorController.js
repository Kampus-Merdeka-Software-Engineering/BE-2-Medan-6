const db = require('../models')

// create main table

const Motor = db.tabelmotor

// main work
// https://be-2-medan-6-production.up.railway.app/

const addMotor = async (req, res) => {
    
        let info = {
            namaMotor    : req.body.namaMotor,
            harga        : req.body.harga,
            tipeMotor    : req.body.tipeMotor,
        }
    
        const Motor = await db.tabelmotor.create(info)
        res.status(200).send(Motor)
        console.log(Motor)
    
    }

// 1. get all motor

const getAllMotor = async (req, res) => {
        let motors  = await Motor.findAll({})
        res.status(200).send(motors)
}

// 2. get single motor

const getOneMotor = async (req, res) => {
        let id = req.params.id
        let motor  = await Motor.findOne({ where : { id : id }})
        res.status(200).send(motor)
}

module.exports = {
    addMotor,
    getAllMotor,
    getOneMotor
};
