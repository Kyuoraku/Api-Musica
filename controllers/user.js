'use strict'

let bcrypt = require('bcrypt-nodejs')
let user = require('../models/user')

function pruebas(req, res){

    res.status(200).send(
        {
            message:'Probando una acción del controlador de usuarios del API'
        }
    )

}

function saveUser(req, res){

    let usr = new user()
    //se recolectan los datos del cuerpo de la petición
    let param = req.body

    console.log(param)

    usr.name = param.name
    usr.surname = param.surname
    usr.email = param.email
    usr.role = 'ROLE_USER'
    usr.image = 'null'

    //se guarda en bbdd

    if(param.password){

        bcrypt.hash(usr.password, null, null, function(err, hash){

            usr.password = hash

            if (usr.name != null && usr.surname != null && usr.email != null){

                //se guarda en mongo
                usr.save((err, userStored) => {

                    if(err){
                        res.status(500).send({message:'Error al guardar el usuario.'})
                    }else{
                        if(!userStored){
                            res.status(404).send({message:'Ha ocurrido un error'})
                        }else{
                            res.status(200).send({user:userStored})
                        }
                    }

                })


            }else{
                res.status(200).send({message:'Introduce los datos que faltan.'})
            }

        })

    }else{
        res.status(200).send({message:'Introduce la contraseña'})
    }

}

module.exports = {
    //lista de métodos que exportamos, o sea, todos los que haya:
    pruebas,
    saveUser
}