let mongoose = require('mongoose')
let userData = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required:true
        
    },
    likes: {
        type: Number,
        default: 64
    },
    image: {
        data:Buffer,
        contentType: String
    }
})

let model = mongoose.model("Instacollection", userData)

module.exports = model;