module.exports = (sequelize, DataTypes) => {

    const Mobil = sequelize.define('tabel_mobil', {
        namaMobil : {
            type : DataTypes.STRING
        },
        harga : {
            type : DataTypes.INTEGER
        },
        tipeMobil : {
            type : DataTypes.STRING
        },
        bagasi : {
            type : DataTypes.INTEGER
        },
        jumlahMuatan : {
            type : DataTypes.INTEGER
        },
    });

    return Mobil;

}