'use strict'

let bcrypt = require('bcrypt-nodejs')
let User = require('../models/user')
let jwt = require('../services/jwt')

function pruebas(req, res){

    res.status(200).send(
        {
            message:'Probando una acción del controlador de usuarios del API'
        }
    )

}

function saveUser(req, res){

    let user = new User()
    let params = req.body

    console.log(params)

    user.name = params.name
    user.surname = params.surname
    user.email = params.email
    user.role = 'ROLE_USER'
    user.image = 'null'

    //se guarda en bbdd

    if(params.password){

        
        bcrypt.hash(params.password, null, null, function(err, hash){

            user.password = hash

            if (user.name != null && user.surname != null && user.email != null){

                //se guarda en mongo
                user.save((err, userStored) => {

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

function loginUser(req, res){

    let params = req.body

    let email = params.email
    let password = params.password

    User.findOne({email: email.toLowerCase()}, (err,user)=>{
        if (err){
            res.status(500).send({message:'Error en la petición.'})
        }else{
            if (!user) {
                res.status(404).send({message:'El usuario no existe'})
            } else {
                bcrypt.compare(password, user.password, function(err, check){

                    if(check){
                        if(params.gethash){
                            res.status(200).send({
                                token: jwt.createToken(user)
                            })
                        }else{
                            res.status(200).send({user})
                        }
                    }else{
                        res.status(402).send({message:'Credenciales no correctas.'})
                    }

                })
            }
        }

    })

}
module.exports = {
    //lista de métodos que exportamos, o sea, todos los que haya:
    pruebas,
    saveUser,
    loginUser
}