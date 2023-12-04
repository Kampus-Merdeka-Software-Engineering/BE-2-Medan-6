const db = require('../models')

// create main table

const Motor = db.tabelmotor

// main work

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
    getAllMotor,
    getOneMotor
};
