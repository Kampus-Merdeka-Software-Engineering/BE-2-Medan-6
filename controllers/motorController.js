const db = require('../models')

// create main table

const Motor = db.tabelmotor

// main work

// add Motor
const addMotor = async (req, res) => {
    
        try {
            let info = {
                namaMotor    : req.body.namaMotor,
                harga        : req.body.harga,
                tipeMotor    : req.body.tipeMotor,
            }
        
            const Motor = await db.tabelmotor.create(info)
            res.status(200).send(Motor)
            console.log(Motor)
        } catch (error) {
            console.log(error)
        }
    
    
    }

// 1. get all motor

const getAllMotor = async (req, res) => {
        try {
                let motors  = await Motor.findAll({})
                res.status(200).send(motors)
        } catch (error) {
                
        }
}

// 2. get single motor

const getOneMotor = async (req, res) => {
        try {
                let id = req.params.id
                let motor  = await Motor.findOne({ where : { id : id }})
                res.status(200).send(motor)
        } catch (error) {
                
        }
}

module.exports = {
        addMotor,
    getAllMotor,
    getOneMotor
};
