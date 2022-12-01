const validator = require('validator')
const buildPayment = require('./payment')
const buildGetPayment = require('./payment-for-get')
const {DateTime,FixedOffsetZone} = require('luxon')


const makePayment = buildPayment({})
const makeGetPayment = buildGetPayment({})


module.exports = {
    makePayment,
    makeGetPayment
}

