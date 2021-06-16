const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

//User Schema
const userSchema = new Schema({
    name : {
        type: String,
        reuired:true
    },
    email : {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // username: {
    // type: String,
    // required: true
    // }

})

const User = module.exports = mongoose.model("user",userSchema)

module.exports.getUserId = function(id,callback){
    User.findById(id,callback);
}

module.exports.getUserByEmail = function(email,callback){
    const querry = {email: email}
    User.findOne(querry, callback);
};

module.exports.addUser = function(newUser, callback){
    bcrypt.genSalt(10, (err, salt) => {
        if(err) throw err;
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        })
    })
}

module.exports.comparePassword = function(candidatepassword, hash, callback){
    bcrypt.compare(candidatepassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch)
    });
}