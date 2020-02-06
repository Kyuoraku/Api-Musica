'use strict'

let mongoose = require('mongoose')
let schema = mongoose.Schema

let songSchema = schema({
    number:Number,
    name:String,
    duration:String,
    file:String,
    album: {type:Schema.ObjectId, ref:'Album'}
})

module.exports = mongoose.model('Song', songSchema)