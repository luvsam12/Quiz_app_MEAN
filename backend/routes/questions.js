const express = require("express");
const Question = require("../models/questions");
const router = express.Router();

router.get('/', (req,res) => {
    Question.find()
    .then((question) => {
        res.json({ data: question});
    }).catch((err) => {
        res.json({data: 'No question found'});
    })
})

router.post('/', (req,res) => {
    const question = new Question({
        question: req.body.question,
        answere: req.body.answere,
        option1: req.body.option1,
        option2: req.body.option2,
        option3: req.body.option3,
        option4: req.body.option4
    });
    question.save().then(data => res.json({success:true,data:data}))
    .catch(err => {
        res.json({sucess:false,data: err});
    });
})

module.exports = router;