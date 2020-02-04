'use strict'

let mongoose = require('mongoose')
let schema = mongoose.Schema

let albumSchema = Schema({
    title:String,
    description:String,
    year:Number,
    image:String,
    artist:{type:Schema.ObjectId, ref:'Artist'}
})

module.exports = mongoose.model('Album', albumSchema)