let connectionMysql = require('../config/conn')
class ModelVehiculo
{
    static async readModelTodosVehiculos(){
        try {
            var conn = await connectionMysql().promise()
            var sql = "select * from vehiculo"
            var datos = await conn.query(sql)
            await conn.end()
            return datos[0]
        }catch (e) {
            return []
        }
    }

    static async registroModelTodosVehiculos(placa,cedula,marca,modelo,anio){
        try {
            var conn = await connectionMysql().promise()
            var sql = "insert into vehiculo(PLACA, CEDULA, MARCA, MODELO, ANIO) " +
                "VALUES ('"+placa+"','"+cedula+"','"+marca+"','"+modelo+"','"+anio+"')"
            console.log(sql)
            var datos = await conn.query(sql)
            await conn.end()
            return 200
        }catch (e) {
            return 400
        }
    }
}


module.exports = ModelVehiculo