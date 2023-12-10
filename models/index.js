const dbConfig = require('../config/dbConfig')

const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host : dbConfig.HOST,
        port : dbConfig.PORT,
        dialect : dbConfig.dialect,

        pool : {
            max : dbConfig.pool.max,
            min : dbConfig.pool.min,
            acquire : dbConfig.pool.acquire,
            idle : dbConfig.pool.idle
        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('connected...')
})
.catch(err => {
    console.log('Error '+ err)
})

const db = {}


db.Sequelize = sequelize
db.sequelize = sequelize

db.tabelpesanan     = require('./pesananModel')(sequelize, DataTypes)
db.tabel_mobil      = require('./mobilModel')(sequelize, DataTypes)
db.tabelmotor       = require('./motorModel')(sequelize, DataTypes)
db.tabelpemesan     = require('./pemesanModel')(sequelize, DataTypes)
db.tabelpembayaran  = require('./pembayaranModel')(sequelize, DataTypes)

// association tabel pemesan
db.tabel_mobil.hasMany(db.tabelpemesan)
db.tabelmotor.hasMany(db.tabelpemesan)
db.tabelpesanan.hasMany(db.tabelpemesan)


// tabel pemesan foreignkey
db.tabelpemesan.belongsTo(db.tabelmotor)
db.tabelpemesan.belongsTo(db.tabel_mobil)
db.tabelpemesan.belongsTo(db.tabelpesanan)

//association tabel pembayaran
db.tabelpemesan.hasOne(db.tabelpembayaran)

// tabel pembayaran foreignkey
db.tabelpembayaran.belongsTo(db.tabelpemesan)

db.sequelize.sync({ force : false })
.then(() => {
    console.log('yes re-sync done!')
})

module.exports = db