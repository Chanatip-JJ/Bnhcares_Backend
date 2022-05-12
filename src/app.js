const path = require('path')
require('dotenv').config({
    path: path.join(__dirname,'..','.env')
})
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const packageRouter = require('./routes/packages.router')
const personRouter = require('./routes/person.router')
const orderRouter = require('./routes/order.router')
const paymentRouter = require('./routes/payment.router')

const app  = express()
app.use(cors({
    origin:`http://localhost:${process.env.PORT}`})
)
app.use(morgan('combined'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/packages',packageRouter)
app.use('/person',personRouter)
app.use('/order',orderRouter)
app.use('/payment',paymentRouter)
module.exports = app