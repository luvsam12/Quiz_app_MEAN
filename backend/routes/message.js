const express = require("express")
const router = express.Router();
const Message = require("./../models/message")

router.post('', (req,res) => {
    const mess = new Message({
        name: req.body.name,
        contact: req.body.contact,
        message: req.body.message
    })
    mess.save()
    .then(message => {
        res.status(200)
        .json({success: true, msg: "message delivered"})
    })
    .catch(err => {
        res.status(404)
        .json({success: false, msg: err})
    })
})

module.exports = router;
