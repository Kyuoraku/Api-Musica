'use strict'

function pruebas(req, res){

    res.status(200).send(
        {
            message:'Probando una acción del controlador de usuarios del API'
        }
    )

}

module.exports = {
    //lista de métodos que exportamos, o sea, todos los que haya:
    pruebas
}