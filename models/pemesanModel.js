module.exports = (sequelize, DataTypes) => {

    const Pemesan = sequelize.define('tabelpemesan', {
        nama : {
            type : DataTypes.STRING
        },
        nik : {
            type : DataTypes.INTEGER
        },
        email : {
            type : DataTypes.STRING
        },
        alamat : {
            type : DataTypes.STRING
        },
        nomorHandphone : {
            type : DataTypes.STRING
        },
    });

    return Pemesan;

}