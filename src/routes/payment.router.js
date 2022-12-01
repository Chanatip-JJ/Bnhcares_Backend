const express = require("express");
const makeCallback = require("../helpers/express-callbacks");
const paymentRouter = express.Router({ mergeParams: true });
const { getPayment,
        getPaymentID,
        postPayment,
        //postFrontendPayment
      } = require("../Payment/controllers");
//* swagger tags
/**
 * @openapi
 *  tags: 
 *    name: Payment
 *    description: The Payment managing API   
 */
//* swagger get method
/**
   * @openapi
   * '/payment':
   *  get:
   *     tags: [Payment]
   *     summary: Return a list of all payment.
   *     responses:
   *       200:
   *         description: Success
   */
paymentRouter.get('',makeCallback(getPayment))
//* swagger post method
/**
   * @openapi
   * '/payment/new':
   *  post:
   *     tags: [Payment]
   *     summary: make a new payment
   *     description : make a payment associated with order_id
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/Payment'
   *     responses:
   *      200:
   *        description: Success
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
paymentRouter.post('/new',makeCallback(postPayment))


/**
   * @openapi
   * '/payment/new':
   *  post:
   *     tags: [Payment]
   *     summary: make a new payment
   *     description : make a payment associated with order_id
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/Payment'
   *     responses:
   *      200:
   *        description: Success
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
 paymentRouter.post('/new',makeCallback(postPayment))

 
//* swagger get method with id
/**
   * @openapi
   * paths:
   *  '/payment/{payment_id}':
   *   get:
   *     tags: [Payment]
   *     summary: Return the payment.
   *     parameters:
   *     - in: path
   *       name: payment_id
   *       description: Numeric ID of the payment to get
   *       required: true
   *       type: Number 
   *     responses:
   *       200:
   *         description: Success
   *       400:
   *         description: Payment not found
   */
paymentRouter.get('/:payment_id', makeCallback(getPaymentID));


module.exports = paymentRouter;
