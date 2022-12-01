const jwt = require('jsonwebtoken')
const axios = require('axios').default

const {OrderDetailAccessDB,
       OrderHeaderAccessDB,
       OrderHeaderSearchDB
     } = require('../data-access')
const makeListOrderID = require('./list-order-id')
const makeListOrder = require('./list-order')
const makeRemoveOrder = require('./remove-order') 
const makeAddOrder = require('./add-order')
const makeEditOrder = require('./edit-order')
const makePayOrder = require('./pay-order')
const makeHandlePayment = require('./handle-payment')
const makeListOrderWithUser = require('./list-order-with-user')
const makeEditOrderDetail = require('./edit-order-detail')
const makeGetOrderDetails = require('./list-order-details')
const makeGetInvoice = require('./get-invoice')

const adaptPaymentOrder= require('../adaptPayment')


const {
    makeOrderHeader,
    makeGetOrderHeader,
    makeOrderDetail,
    makeGetOrderDetail,
    makeSearchOrderHeader
} = require('../OrderEntity')


const handlePayment = makeHandlePayment({adaptPaymentOrder,jwt,axios})

const payOrderID = makePayOrder({OrderHeaderAccessDB,
                                 OrderDetailAccessDB,
                                 makeGetOrderHeader,
                                 makeGetOrderDetail,
                                 handlePayment})

const listOrders = makeListOrder({OrderHeaderSearchDB,makeSearchOrderHeader})

const listOrderID = makeListOrderID({OrderHeaderAccessDB,
                                     OrderDetailAccessDB,
                                     makeGetOrderHeader,
                                     makeGetOrderDetail})

const listOrderWithUserId = makeListOrderWithUser({OrderHeaderAccessDB,
                                                   OrderDetailAccessDB,
                                                   makeGetOrderHeader,
                                                   makeGetOrderDetail
                                                  })



const removeOrder = makeRemoveOrder({OrderHeaderAccessDB,
                                     OrderDetailAccessDB,
                                     makeGetOrderHeader,
                                     makeGetOrderDetail})

const addOrder = makeAddOrder({OrderHeaderAccessDB,
                               OrderDetailAccessDB,
                               makeOrderHeader,
                               makeOrderDetail})

const editOrder = makeEditOrder({OrderHeaderAccessDB,
                                OrderDetailAccessDB,
                                makeOrderHeader,
                                makeGetOrderHeader,
                                makeOrderDetail,
                                makeGetOrderDetail})

const editOrderDetail = makeEditOrderDetail({OrderDetailAccessDB,
                                             makeOrderDetail,
                                             makeGetOrderDetail})

const listOrderDetails = makeGetOrderDetails({OrderDetailAccessDB,
                                             makeGetOrderDetail})

const listInvoice = makeGetInvoice({OrderHeaderAccessDB, 
                                    makeGetOrderHeader,
                                   })

module.exports = {
    listOrders,
    listOrderID,
    removeOrder,
    addOrder,
    editOrder,
    payOrderID,
    listOrderWithUserId,
    editOrderDetail,
    listOrderDetails,
    listInvoice
}

