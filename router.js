const express = require('express')
const router = express.Router()
const questionsCollection = require('./db').db().collection('quiz-data')


router.get('/', (req, res) => {
    questionsCollection.find().toArray((err, questions) => {
        res.render('home', { questions: questions })
    })
})

router.post('/score', (req, res) => {
    questionsCollection.find().toArray((err, questions) => {
        let score = 0;
        const correctAnswers = [];
        questions.forEach((question, index) => {
            correctAnswers.push(question.correctAnswer);
        })
        const userAnswers = Object.values(req.body);
        userAnswers.forEach((answer, index) => {
            if (answer === correctAnswers[index]) {
                score += 10;
            }
        })
        res.render('score', { score: score })
    })
})

module.exports = router