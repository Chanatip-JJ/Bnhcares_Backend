const express = require("express");

const makeCallback = require("../library/express-callbacks");
//const orderRouter = require('./order.router')
const orderRouter = express.Router({ mergeParams: true });
const { getOrder,
        getOrderID,
        postOrder,
        patchOrder,
        deleteOrder
      } = require("../Order/controllers");

orderRouter.get('',makeCallback(getOrder))
orderRouter.get('/:order_id', makeCallback(getOrderID));
orderRouter.post('/new',makeCallback(postOrder))
orderRouter.patch(`/:order_id`,makeCallback(patchOrder))
orderRouter.delete('/:order_id', makeCallback(deleteOrder));
//orderRouter.use(`/:$order_id/order`,orderRouter)
module.exports = orderRouter;
