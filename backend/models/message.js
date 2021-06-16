const mongoose = require("mongoose")
const message = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    contact:{
        
    },
    message:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Message", message)