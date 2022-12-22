let ControllerMecanico = require("../controller/controller.mecanico")
let express = require("express")
let app = express()

app.post("/registroMecanico",async function(req,res)
{
    var result = await ControllerMecanico
        .registroControllerMecanico(req.body.cedula,req.body.ruc,req.body.nombre,
            req.body.apellido,req.body.celular,req.body.telefono,
            req.body.avatar,req.body.calificacion)

    res.status(200).json({
        status_code: result != null ? 200 : 400,
        msm: result != null ? "MECANICO REGISTRADO CON EXITO" : "ERROR AL REGISTRAR"
    })


})


app.post("/loginMecanico",async function(req,res)
{
    var result = await ControllerMecanico
        .loginControllerMecanico(req.body.user,req.body.pass)

    res.status(200).json({
        status_code: result != null ? 200 : 400,
        datos:result == null ? null : result,
        msm: result != null ? "LOGIN CON EXITO" : "NO LOGIN DATOS INCORRECTOS"
    })


})


module.exports = app