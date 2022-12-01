const {listOrders,
      listOrderID,
      payOrderID,
      removeOrder,
      addOrder,
      editOrder,
      listOrderWithUserId,
      editOrderDetail,
      listOrderDetails,
      listInvoice

      } = require('../use-cases');
      
const makeGetOrders = require('./get-orders');
const makeGetOrderID = require('./get-orderId')
const makeRemoveOrder = require('./delete-order')
const makeAddOrder =require('./post-order')
const makeEditOrder = require('./patch-order')
const makePayOrder = require('./get-pay-order')
const makeGetUserID = require('./get-user-order')
const makeEditOrderDetail = require('./patch-order-detail')
const makeGetOrderDetails = require('./get-order-details')
const makeGetInvoice = require('./get-invoice')

const getOrder = makeGetOrders({listOrders});
const getOrderID = makeGetOrderID({listOrderID});
const deleteOrder = makeRemoveOrder({removeOrder})
const postOrder = makeAddOrder({addOrder})
const patchOrder = makeEditOrder({editOrder})
const getPayOrder = makePayOrder({payOrderID})
const getUserOrder = makeGetUserID({listOrderWithUserId})
const patchOrderDetail = makeEditOrderDetail({editOrderDetail})
const getOrderDetails = makeGetOrderDetails({listOrderDetails})
const getInvoice = makeGetInvoice({listInvoice})

module.exports = {
  getOrder,
  getOrderID,
  getPayOrder,
  deleteOrder,
  postOrder,
  patchOrder,
  getUserOrder,
  patchOrderDetail,
  getOrderDetails,
  getInvoice 
};

