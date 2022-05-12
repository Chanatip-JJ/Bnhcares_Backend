const PaymentAccessDB = require('../data-access')

const makeListPaymentID = require('./list-payment-id')
const makeListPayment = require('./list-payment')
const makeAddPayment = require('./add-payment')


const {
    makePayment,
    makeGetPayment
} = require('../PaymentEntity')

const listPayment = makeListPayment({PaymentAccessDB,makeGetPayment})
const listPaymentID = makeListPaymentID({PaymentAccessDB,makeGetPayment})
const addPayment = makeAddPayment({PaymentAccessDB,makePayment})

module.exports = {
    listPayment,
    listPaymentID,
    addPayment,
}

