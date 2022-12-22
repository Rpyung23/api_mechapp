let ModelMecanico = require("../model/model.mecanico")
class ControllerMecanico
{
    static async registroControllerMecanico(cedula,ruc,nombre,apellido,celular,
                                            telefono,avatar,calificacion)
    {
        return await ModelMecanico.registroModelMecanico(cedula,ruc,nombre,apellido,celular,
            telefono,avatar,calificacion)
    }


    static async loginControllerMecanico(user,pass)
    {
        return await ModelMecanico.loginModelMecanico(user,pass)
    }

}


module.exports = ControllerMecanico