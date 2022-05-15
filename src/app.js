const path = require('path')
require('dotenv').config({
    path: path.join(__dirname,'..','.env')
})
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
//const swaggerUI = require('swagger-ui-express')
//const swaggerJSDoc = require('swagger-jsdoc')

const packageRouter = require('./routes/packages.router')
const personRouter = require('./routes/person.router')
const orderRouter = require('./routes/order.router')
const paymentRouter = require('./routes/payment.router')
//const specs = swaggerJsDoc(options)


const app  = express()
app.use(helmet())
app.use(cors({
    origin:`http://${process.env.URL}`})
)
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
//app.use('api-docs',swaggerUI.serve, swaggerUI.setup(specs))



// API calls each endpoints
app.use('/packages',packageRouter)
app.use('/person',personRouter)
app.use('/order',orderRouter)
app.use('/payment',paymentRouter)
module.exports = app