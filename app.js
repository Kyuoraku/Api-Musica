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

module.exports = app