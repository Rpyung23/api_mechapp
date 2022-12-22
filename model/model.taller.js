let connectionMysql = require('../config/conn')
class ModelTaller
{
    static async readModelTaller()
    {

        try {
            var conn = await connectionMysql().promise()
            var sql = "select * from taller"
            var datos = await conn.query(sql)
            await conn.end()
            return datos[0][0];
        }catch (e) {
            return null
        }


    }
}

module.exports = ModelTaller