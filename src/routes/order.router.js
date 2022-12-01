const express = require("express");

const makeCallback = require("../helpers/express-callbacks");
const makeCallbackPDF = require("../helpers/express-callbacks-pdf");
const checkOrderAccess = require('../middleware/checkOrderAccess')
const orderRouter = express.Router({ mergeParams: true });
const { getOrder,
        getOrderID,
        getPayOrder,
        postOrder,
        patchOrder,
        deleteOrder,
        getUserOrder,
        patchOrderDetail,
        getOrderDetails,
        getInvoice
      } = require("../Order/controllers");
      
//* swagger tags
/**
   * @swagger
   *  tags: 
   *    name: Order
   *    description: The Order managing API (including Order header and details)    
   */
//* swagger get method
/**
   * @swagger
   * '/order':
   *  get:
   *     tags: [Order]
   *     summary: Return a list of all order.
   *     parameters:
   *     - in: query
   *       name: order_id
   *       description: query for order id
   *       type: int
   *     - in: query
   *       name: HN
   *       description: query for hn
   *       type: string
   *     - in: query
   *       name: first_name
   *       description: query for first name
   *       type: string
   *     - in: query
   *       name: last_name
   *       description: query for last name
   *     - in: query
   *       name: day
   *       description: query for period of days
   *       type: string
   *     - in: query
   *       name: start_date
   *       description: query for start date
   *       type: string
   *     - in: query
   *       name: end_date
   *       description: query for end date
   *       type: string   
   *     responses:
   *       200:
   *         description: Success
   *       400:
   *         description: Not found 
   */
orderRouter.get('',makeCallback(getOrder))


/**
   * @swagger
   * paths:
   *  '/order/detail':
   *   get:
   *     tags: [Order]
   *     summary: Return the order.
   *     parameters:
   *     - in: query
   *       name: path
   *       description: query for order detail
   *       type: string
   *     responses:
   *       200:
   *         description: Success
   *       400:
   *         description: Not found
   */   
 orderRouter.get('/detail', makeCallback(getOrderDetails));

/**
   * @swagger
   * paths:
   *  '/order/invoice/{order_id}':
   *   get:
   *     tags: [Order]
   *     summary: Return an invoice.
   *     parameters:
   *     - in: path
   *       name: order_id
   *       description: 
   *       type: Integer
   *     responses:
   *       200:
   *         headers:  
   *           Content-Disposition:
   *             schema:
   *             type: string
   *         content:  
   *           application/pdf:
   *             schema:
   *               type: file
   *               format: binary    
   *       400:
   *         description: Not found
   */   
 orderRouter.get('/invoice/:order_id',makeCallbackPDF(getInvoice));


//* swagger get,patch,delete method
/**
   * @swagger
   * paths:
   *  '/order/{order_id}':
   *   get:
   *     tags: [Order]
   *     summary: Return the order.
   *     parameters:
   *     - in: path
   *       name: order_id
   *       description: Numeric ID of the order to get
   *       required: true
   *       type: Number 
   *     responses:
   *       200:
   *         description: Success
   *       400:
   *         description: Order not found
   *   delete:
   *     tags: [Order]
   *     summary: Delete the order
   *     parameters:
   *     - in: path
   *       name: order_id
   *       description: Numeric ID of the order to delete
   *       required: true
   *       type: Integer 
   *     responses:
   *       200:
   *         description: Success
   *       400:
   *         description: unsuccessfully deleted 
   *   patch:
   *     tags: [Order]
   *     summary: Edit the order
   *     parameters:
   *     - in: path
   *       name: order_id
   *       description: Numeric ID of the order to update
   *       required: true
   *       type: Integer
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/Order' 
   *     responses:
   *       200:
   *         description: Success
   *       404:
   *         description: Bad Request
   *       400:
   *         description: Order not found
   */
  
orderRouter.get('/:order_id', makeCallback(getOrderID));
orderRouter.patch(`/:order_id`,makeCallback(patchOrder))
orderRouter.delete('/:order_id', makeCallback(deleteOrder));


/**
   * @swagger
   * paths:
   *  '/order/user/{user_id}':
   *   get:
   *     tags: [Order]
   *     summary: Return the order.
   *     parameters:
   *     - in: path
   *       name: user_id
   *       description: Numeric ID of the user id to get
   *       required: true
   *       type: Number 
   *     responses:
   *       200:
   *         description: Success
   *       400:
   *         description: Order not found
   */   
 orderRouter.get('/user/:user_id', makeCallback(getUserOrder));


//* swagger post method
/**
   * @swagger
   * '/order/new':
   *  post:
   *     tags: [Order]
   *     summary: Create a new order
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/Order'
   *     responses:
   *      200:
   *        description: Success
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */ 
orderRouter.post('/new',makeCallback(postOrder))




/**
   * @swagger
   *  paths:
   *  '/order/{order_id}/check-out':
   *   get:
   *     tags: [Order]
   *     summary: make payment with order_id
   *     description : put order_id in order to check out
   *     parameters:
   *     - in: path
   *       name: order_id
   *       description: Numeric ID of the order to get
   *       required: true
   *       type: Number 
   *     responses:
   *       200:
   *         description: Success
   *       400:
   *         description: Order not found
   */
orderRouter.get('/:order_id/check-out', makeCallback(getPayOrder))








/**
   * @swagger
   * paths:
   *  '/order/detail/{ORDDT_NO}/{ORDDT_LINENO}':
   *   patch:
   *     tags: [Order]
   *     summary: Return the order.
   *     parameters:
   *     - in: path
   *       name: ORDDT_NO
   *       description: order number
   *       required: true
   *       type: Number
   *     - in: path
   *       name: ORDDT_LINENO
   *       description: order line number
   *       required: true
   *       type: Number
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/OrderDetail' 
   *     responses:
   *       200:
   *         description: Success
   *       400:
   *         description: Order not found
   */
orderRouter.patch('/detail/:ORDDT_NO/:ORDDT_LINENO',makeCallback(patchOrderDetail))



module.exports = orderRouter;
