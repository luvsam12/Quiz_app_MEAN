const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors")
const passport = require("passport");
const app = express();
require('dotenv').config();

//middlewares.
app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport);

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use("/user", require("./routes/user"));
app.use('/questions', require('./routes/questions'));
app.use('/result', require("./routes/response"));
app.use('/message', require("./routes/message"))


//Database connection
mongoose
    .connect("mongodb+srv://luvsam:luvsam@cluster0.muyhd.mongodb.net/Quiz-app?retryWrites=true&w=majority",
            { useNewUrlParser: true,
              useUnifiedTopology: true }, 
            )
    .then(() => {
        console.log("DB Connected.")
    })
    .catch(() => {
        console.log("DB Not Connected.")
    })


// server configuration
const port = process.env.PORT || 3000;
app.listen(port , () => {
    console.log(`Server running on ${port}.`)
})