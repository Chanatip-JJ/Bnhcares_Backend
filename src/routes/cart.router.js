const express = require("express");
const makeCallback = require("../helpers/express-callbacks");
const cartRouter = express.Router({ mergeParams: true });
const { getCart,
        deleteCart,
        postCart,
        patchCart,
        deleteClearCart
      } = require("../Cart/controllers");

//* swagger tags
/**
   * @openapi
   *  tags: 
   *    name: Cart
   *    description: The Cart managing API   
   */



/**
   * @openapi
   * paths:
   *  '/cart/{user_id}':
   *   get:
   *     tags: [Cart]
   *     summary: Return a list of all packages in cart.
   *     parameters:
   *       - in: path
   *         name: user_id
   *         description: Numeric ID of the user_id to clear 
   *         required: true
   *         type: Number
   *     responses:
   *       200:
   *         description: Success
   *       404:
   *         description: Bad Request
   *       400:
   *         description: Cart not found 
   */
cartRouter.get('/:user_id',makeCallback(getCart));
//* swagger get,patch,delete method
/**
   * @openapi
   *  '/cart/delete':
   *   delete:
   *     tags: [Cart]
   *     summary: Delete the Cart
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/Cart' 
   *     responses:
   *       200:
   *         description: Success
   *       400:
   *         description: unsuccessfully deleted
   */
cartRouter.delete('/delete', makeCallback(deleteCart));
   /**
   * @openapi
   *  '/cart/edit':
   *    patch:
   *     tags: [Cart]
   *     summary: Edit the Cart
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/Cart' 
   *     responses:
   *       200:
   *         description: Success
   *       404:
   *         description: Bad Request
   *       400:
   *         description: Cart not found
   */

cartRouter.patch(`/edit`,makeCallback(patchCart))

//* swagger post method
/**
   * @openapi
   * '/cart/add':
   *  post:
   *     tags: [Cart]
   *     summary: Create a new cart and put a new package in the cart
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/Cart'
   *     responses:
   *      204:
   *        description: Package have successfully been added in Cart
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
cartRouter.post('/add',makeCallback(postCart))

//* swagger delete method for clearing cart
/**
   * @openapi
   * paths:
   *  '/cart/{user_id}':
   *   delete:
   *      tags: [Cart]
   *      summary: Clear all packages in user's cart
   *      parameters:
   *       - in: path
   *         name: user_id
   *         description: Numeric ID of the user_id to clear 
   *         required: true
   *         type: Number
   *      responses:
   *        201:
   *          description: Successfully deleted
   *        409:
   *          description: Conflict
   *        400:
   *          description: Bad request
   */
cartRouter.delete('/:user_id',makeCallback(deleteClearCart))
module.exports = cartRouter;
