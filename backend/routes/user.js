const express = require("express");
const Router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
require('dotenv').config();
const User = require("./../models/User");

Router.post("/register", (req,res, next) => {
    let newUser = new User({
        name: req.body.name.toLowerCase(),
        email: req.body.email.toLowerCase(),
        password: req.body.password,
        // username: req.body.username
    })
    // console.log(newUser)
    User.findOne({email: newUser.email}, (err , user) => {
        if(user != null) {
            return res.json({success: false, msg:'Email already registered'});
        }
        else{
            User.addUser(newUser, (err, user) => {
                if(!user){
                    return res.json({success: false, msg:'Failed to register user'});
                }
                else {
                    return res.json({success: true, msg:'User register'});
                }
            })
        }
    })
})

Router.post("/login", (req,res) => {
    const email = req.body.email.toLowerCase();
    const password = req.body.password;

    User.getUserByEmail(email , (err, user) => {
        if(err)
        throw err;
        if(!user) {
            return res.json({ success: false, msg: "User not found" })
        }
        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) {
                throw err;
            }
            if(isMatch) {
                const token = jwt.sign(user.toJSON(), process.env.secret, {
                    expiresIn: 604800 // 1 week;
                })
                res.json({
                    success: true,
                    token: token,
                    user:{
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
                })
            }
            else{
            return res.json({ success: false, msg: "Wrong Password" })
            }
        })

    })
})

Router.get('/profile', passport.authenticate('jwt', {session:false}), (req,res,next) => {
    res.json({user:req.user});
})
module.exports = Router;