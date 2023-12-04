module.exports = (sequelize, DataTypes) => {

    const Motor = sequelize.define('tabelmotor', {
        namaMotor : {
            type : DataTypes.STRING
        },
        harga : {
            type : DataTypes.INTEGER
        },
        tipeMotor : {
            type : DataTypes.STRING
        },
    });

    return Motor;

}