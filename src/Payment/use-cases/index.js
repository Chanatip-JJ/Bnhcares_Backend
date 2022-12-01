const jwt = require('jsonwebtoken')
const {OrderHeaderAccessDB} = require('../../Order/data-access')
const PaymentAccessDB = require('../data-access')
const makeListPaymentID = require('./list-payment-id')
const makeListPayment = require('./list-payment')
const makeAddPayment = require('./add-payment')
const makeUpdateOrder = require('./update-orderheader')

const {
    makePayment,
    makeGetPayment
    } = require('../PaymentEntity')

const {
    makeOrderHeader,
    makeGetOrderHeader
    } = require('../../Order/OrderEntity')

const updateOrder = makeUpdateOrder({makeOrderHeader,makeGetOrderHeader,OrderHeaderAccessDB})


const listPayment = makeListPayment({PaymentAccessDB,makeGetPayment})
const listPaymentID = makeListPaymentID({PaymentAccessDB,makeGetPayment})
const addPayment = makeAddPayment({PaymentAccessDB,makePayment,updateOrder,jwt})

module.exports = {
    listPayment,
    listPaymentID,
    addPayment,
}

