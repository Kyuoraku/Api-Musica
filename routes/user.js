'use strict'

let express = require('express')
let userController = require('../controllers/user')

let api = express.Router()

//ruta y método que se ejecuta en esa ruta.
api.get('/probando-controlador',userController.pruebas)

module.exports = api