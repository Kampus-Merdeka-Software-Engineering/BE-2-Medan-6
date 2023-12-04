module.exports = (sequelize, DataTypes) => {

    const Pembayaran = sequelize.define('tabelpembayaran', {
        virtualAccount : {
            type : DataTypes.STRING
        },
        totalHarga : {
            type : DataTypes.INTEGER
        },
        lunasAtauTidak : {
            type : DataTypes.STRING
        },
    });

    return Pembayaran;

}