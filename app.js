process.env.PORT = process.env.PORT || 8050;
let express = require('express')
let cors = require('cors')
let bodyParser = require('body-parser')
let cors_config = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}
let app = express()


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let taller = require("./view/taller")
let mecanico = require("./view/mecanico")
let vehiculo = require("./view/vehiculo")

app.use(cors(cors_config))
app.use(taller)
app.use(mecanico)
app.use(vehiculo)

app.listen(process.env.PORT,()=>{
    console.log("SERVER LISTENING PORT "+process.env.PORT)
})

