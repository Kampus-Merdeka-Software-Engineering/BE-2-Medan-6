module.exports = {
    HOST : 'viaduct.proxy.rlwy.net',
    USER : 'root',
    PASSWORD : '42A3hHFF5c52-ddEgG3AA22hF6CC1GGd',
    DB : 'railway',
    PORT : 19165,
    dialect : 'mysql',

    pool : {
        max : 5,
        min : 0,
        acquire : 30000,
        idle : 10000
    }
}