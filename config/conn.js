var mysql = require('mysql2');

let connectionMysql = ()=>{
    let connection = mysql.createConnection({
        host: '159.223.111.107',
        user: 'root',
        database: 'mechapp',
        password: 'Urbano1972102030*',
        port:3306
    });

    return connection
}


module.exports = connectionMysql