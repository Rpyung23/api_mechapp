let express = require("express")
let app = express()
let ControllerVehiculo = require("../controller/controller.vehiculo")

app.get("/TodosVehiculos",async function (req,res)
{
    var datos_ = await ControllerVehiculo.readControllerTodosVehiculo()

    res.status(200).json({
        status_code: datos_.length > 0 ? 200 : 300,
        datos:datos_,
        msm:datos_.length > 0 ? "DATOS CONUSLTADO CON EXITO" : "NO EXISTEN DATOS DISPONIBLES"
    })
})


app.post("/Vehiculo",async function (req,res)
{
    var datos_ = await ControllerVehiculo.registroControllerVehiculo(req.body.placa,
        req.body.cedula,req.body.marca,req.body.modelo,req.body.anio,)

    res.status(200).json({
        status_code: datos_,
        msm: datos_ == 200 ? "VEHICULO CON EXITO" : "NO SE PUDO REGISTAR EL VEHICULO"
    })
})


module.exports = app