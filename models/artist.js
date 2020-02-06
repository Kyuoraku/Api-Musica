'use strict'

let mongoose = require('mongoose')
let schema = mongoose.Schema

let artistSchema = schema({
    name:String,
    description:String,
    image:String
})

module.exports = mongoose.model('Artist', artistSchema)