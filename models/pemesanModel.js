module.exports = (sequelize, DataTypes) => {

    const Pemesan = sequelize.define('tabelpemesan', {
        nama : {
            type : DataTypes.STRING
        },
        nik : {
            type : DataTypes.STRING
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
    }, {
        tableName : "pemesan", 
        timestamps : false
    });

    return Pemesan;

}