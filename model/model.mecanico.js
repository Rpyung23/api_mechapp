let connectionMysql = require('../config/conn')
class ModelMecanico
{
    static async registroModelMecanico(cedula,ruc,nombre,apellido,celular,
                                       telefono,avatar,calificacion)
    {
        try{
            var conn = await connectionMysql().promise()
            var sql = "insert into mecanico(CEDULA_MEC, RUC, NOMBRE_MEC, APELLIDO_MEC, " +
                "CELULAR, TELEFONO, AVATAR_MEC, CALIFICACION) values " +
                "('"+cedula+"','"+ruc+"','"+nombre+"','"+apellido+"','"+celular+"','"+telefono+"','"+avatar+"',"+calificacion+")"
            await conn.query(sql)
            await conn.end()
            return 200;
        }catch (e) {
            console.log(e)
            return 400;
        }
    }

    static async loginModelMecanico(user,pass)
    {
        try{
            var conn = await connectionMysql().promise()
            var sql = "select M.CEDULA_MEC,M.NOMBRE_MEC,M.APELLIDO_MEC,M.AVATAR_MEC " +
                "from mecanico as M where M.CEDULA_MEC = '"+user+"' and M.CEDULA_MEC = '"+pass+"'"

            var datos = await conn.query(sql)
            await conn.end()
            return datos[0][0]
        }catch (e) {
            return null
        }
    }

}


module.exports = ModelMecanico