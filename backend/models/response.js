const mongoose = require("mongoose")

let schema = mongoose.Schema({
    user_id : {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('result', schema);