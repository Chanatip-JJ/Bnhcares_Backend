const path = require('path')
require('dotenv').config({
    path: path.join(__dirname,'..','.env')
})
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const packageRouter = require('./routes/package/packages.router')


const app  = express()
app.use(cors({
    origin:`http://localhost:${process.env.PORT}`})
)
app.use(morgan('combined'))
app.use(express.json())
// app.use('/',(req,res) => {
//     res.status(200).send('Hi')
// })
app.use('/packages',packageRouter)

module.exports = app