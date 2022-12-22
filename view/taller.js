let express = require('express')
let app = express()
let ControllerTaller = require("../controller/controller.taller")

app.get("/infoTaller",async function (req, res)
{
    var result = await ControllerTaller.readControllerTaller()

    res.status(200).json({
        status_code: result == null ? 300 :  200,
        datos:result,
        msm:result == null ? "NO EXISTE INFORMACION" : "DATOS CONSULTADOS CON EXITO"
    })
})


module.exports = app

module.exports = app