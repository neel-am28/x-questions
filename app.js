const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const router = require('./router')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('public'))
app.set("views", "views")
app.set("view engine", "ejs")

app.use('/', router)

module.exports = app