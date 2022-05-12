const {listOrders,
      listOrderID,
      removeOrder,
      addOrder,
      editOrder
      } = require('../use-cases');
      
const makeGetOrders = require('./get-orders');
const makeGetOrderID = require('./get-orderId')
const makeRemoveOrder = require('./delete-order')
const makeAddOrder =require('./post-order')
const makeEditOrder = require('./patch-order')


const getOrder = makeGetOrders({listOrders});
const getOrderID = makeGetOrderID({listOrderID});
const deleteOrder = makeRemoveOrder({removeOrder})
const postOrder = makeAddOrder({addOrder})
const patchOrder = makeEditOrder({editOrder})

module.exports = {
  getOrder,
  getOrderID,
  deleteOrder,
  postOrder,
  patchOrder
};

