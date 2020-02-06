'use strict'

let mongoose = require('mongoose')
let app = require ('./app')
const PORT = process.env.PORT || 3977

mongoose.connect('mongodb://localhost:27017/curso_mean', { useNewUrlParser: true, useUnifiedTopology: true }, (err,res) =>{

    if (err){
        throw err
    }else{
        console.log('La base de datos está corriendo correctamente')

        app.listen(PORT, function(){

            console.log('Servidor del API Rest de Musica escuchando en http://localhost:'+PORT)

        })
    }

})
