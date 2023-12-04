module.exports = (sequelize, DataTypes) => {

    const Pesanan = sequelize.define('tabelpesanan', {
        tanggalMulaiSewa : {
            type : DataTypes.DATE
        },
        waktuMulai : {
            type : DataTypes.TIME
        },
        tanggalSelesai : {
            type : DataTypes.DATE
        },
        waktuSelesai : {
            type : DataTypes.TIME
        },
        lokasi : {
            type : DataTypes.TEXT
        },
    });

    return Pesanan;

}