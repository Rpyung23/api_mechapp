let ModelVehiculo = require("../model/model.vehiculo")
class ControllerVehiculo
{
    static async readControllerTodosVehiculo(){
        return await ModelVehiculo.readModelTodosVehiculos()
    }

    static async registroControllerVehiculo(placa,cedula,marca,modelo,anio){
        return await ModelVehiculo.registroModelTodosVehiculos(placa,cedula,marca,modelo,anio)
    }

}

module.exports = ControllerVehiculo