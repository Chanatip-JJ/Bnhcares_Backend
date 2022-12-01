const express = require("express");
const makeCallback = require("../helpers/express-callbacks");
const withdrawalRouter = express.Router({ mergeParams: true });
const { getWithdrawal,
        postWithdrawal,
        patchWithdrawal
      } = require("../Withdrawal/controllers");

//* swagger tags
/**
   * @openapi
   *  tags: 
   *    name: Withdrawal
   *    description: The Withdrawal managing API   
   */
//* swagger get method

/**
   * @openapi
   * paths:
   *  '/withdrawal/{location_uid}/{careprovider_uid}':
   *   get:
   *     tags: [Withdrawal]
   *     summary: Return the Withdrawal.
   *     parameters:
   *     - in: path
   *       name: location_uid
   *       description: Numeric ID of the location to get
   *       required: true
   *       type: Integer
   *     - in: path
   *       name: careprovider_uid
   *       description: Numeric ID of the careprovider to get
   *       required: true
   *       type: Integer
   *     responses:
   *       200:
   *         description: Success
   *       400:
   *         description: Withdrawal not found 
   */
withdrawalRouter.get('/:location_uid/:careprovider_uid', makeCallback(getWithdrawal));


/**
   * @openapi
   * paths:
   *  '/withdrawal/{uid}':
   *   patch:
   *     tags: [Withdrawal]
   *     summary: Edit the Withdrawal
   *     parameters:
   *     - in: path
   *       name: uid
   *       description: Numeric ID of the Withdrawal to update
   *       required: true
   *       type: Integer
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/withdrawal' 
   *     responses:
   *       200:
   *         description: Success
   *       404:
   *         description: Bad Request
   *       400:
   *         description: Withdrawal not found
   */
withdrawalRouter.patch('/:uid',makeCallback(patchWithdrawal))

//* swagger post method
/**
   * @openapi
   * '/withdrawal/new':
   *  post:
   *     tags: [Withdrawal]
   *     summary: Create a new Withdrawal
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *              $ref: '#/components/schemas/withdrawal'
   *     responses:
   *      200:
   *        description: Success
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
withdrawalRouter.post('/new',makeCallback(postWithdrawal))


module.exports = withdrawalRouter;
