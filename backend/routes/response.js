const express = require("express");
const router = express.Router();
const Result = require("../models/response")

router.post('/', (req,res) => {
    const result = new Result({
        user_id: req.body.user_id,
        score: req.body.score,
    });
    result.save()
    .then((data) => {
        res.status(200)
        .json({success: true, msg:"response saved"})
    })
    .catch((err) => {
        res.status(404)
        .json({success: false, msg: err})
    })
})

router.post('/data', (req,res) => {
    Result.find({user_id: req.body.user_id.id})
    .then((data) => {
        res.status(200)
        .json({success: true, msg: data})
    })
    .catch((err) => {
        res.status(404)
        .json({success: false, msg: err})
    })
})

module.exports = router;