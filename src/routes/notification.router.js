const express = require("express");
const makeCallback = require("../helpers/express-callbacks");
const notificationRouter = express.Router({ mergeParams: true });
const { getNotification,
        postNotification,
        patchNotification
      } = require("../Notification/controllers");

//* swagger tags
/**
   * @openapi
   *  tags: 
   *    name: Notification
   *    description: The Notification managing API   
   */
//* swagger get method

/**
   * @openapi
   * paths:
   *  '/notification/{user_uid}':
   *   get:
   *     tags: [Notification]
   *     summary: Return the Notification.
   *     parameters:
   *     - in: path
   *       name: user_uid
   *       description: Numeric ID of the Notification to get
   *       required: true
   *       type: Number 
   *     responses:
   *       200:
   *         description: Success
   *       400:
   *         description: Notification not found 
   */
notificationRouter.get('/:user_uid', makeCallback(getNotification));


/**
   * @openapi
   * paths:
   *  '/notification/{uid}':
   *   patch:
   *     tags: [Notification]
   *     summary: Edit the Notification
   *     parameters:
   *     - in: path
   *       name: uid
   *       description: Numeric ID of the Notification to update
   *       required: true
   *       type: Integer
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/Notification' 
   *     responses:
   *       200:
   *         description: Success
   *       404:
   *         description: Bad Request
   *       400:
   *         description: Notification not found
   */
notificationRouter.patch('/:uid',makeCallback(patchNotification))

//* swagger post method
/**
   * @openapi
   * '/notification/new':
   *  post:
   *     tags: [Notification]
   *     summary: Create a new Notification
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *              $ref: '#/components/schemas/Notification'
   *     responses:
   *      200:
   *        description: Success
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
notificationRouter.post('/new',makeCallback(postNotification))



module.exports = notificationRouter;
