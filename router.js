const express = require('express')
const router = express.Router()
const questionsCollection = require('./db').db().collection('game-data')


router.get('/', (req, res) => {
    questionsCollection.find().toArray((err, questions) => {
        res.render('home', { questions: questions })
    })
})

router.post('/score', (req, res) => {
    questionsCollection.find().toArray((err, questions) => {
        let score = 0;
        const correctAnswers = [];
        questions.forEach((question) => {
            correctAnswers.push(question.correctAnswer);
        })

        let userAnswers = Object.values(req.body);
        userAnswers.forEach((answer, index) => {
            if (answer == correctAnswers[index]) {
                score += 10;
            }
        })
        res.render('score', { score: score })
    })
})

router.get('/score', (req, res) => {
    res.render('score', { score: 0 })
})
module.exports = router