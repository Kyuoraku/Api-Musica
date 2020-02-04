'use strict'

let express = require('express')
let bodyParser = require('body-parser')

let app = express()

//cargar rutas

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//configurar cabeceras http

//TODO

//rutas base

app.get('/pruebas', function(req, res){
    res.status(200).send({message: "Bienvenido a la API"})
})

module.exports = app