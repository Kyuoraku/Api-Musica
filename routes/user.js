'use strict'

let express = require('express')
let userController = require('../controllers/user')
let md_auth = require('../middlewares/authenticated')

let api = express.Router()

//ruta y método que se ejecuta en esa ruta.
api.get('/probando-controlador', md_auth.ensureAuth, userController.pruebas)
api.post('/register',userController.saveUser)
api.post('/login',userController.loginUser)

module.exports = api