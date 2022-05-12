const {OrderDetailAccessDB,
       OrderHeaderAccessDB} = require('../data-access')
const makeListOrderID = require('./list-order-id')
const makeListOrder = require('./list-order')
const makeRemoveOrder = require('./remove-order') 
const makeAddOrder = require('./add-order')
const makeEditOrder = require('./edit-order')

const {
    makeOrderHeader,
    makeGetOrderHeader,
    makeOrderDetail,
    makeGetOrderDetail
} = require('../orderEntity')

const listOrders = makeListOrder({OrderHeaderAccessDB,
                                  OrderDetailAccessDB,
                                  makeGetOrderHeader,
                                  makeGetOrderDetail})
const listOrderID = makeListOrderID({OrderHeaderAccessDB,
                                     OrderDetailAccessDB,
                                     makeGetOrderHeader,
                                     makeGetOrderDetail})
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

module.exports = {
    listOrders,
    listOrderID,
    removeOrder,
    addOrder,
    editOrder
}

