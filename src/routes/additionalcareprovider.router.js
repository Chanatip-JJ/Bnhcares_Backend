const express = require("express");
const makeCallback = require("../helpers/express-callbacks");
const additionalCareproviderRouter = express.Router({ mergeParams: true });
const { getAdditionalCareprovider,
        postAdditionalCareprovider,
        patchAdditionalCareprovider
      } = require("../AdditionalCareprovider/controllers");

//* swagger tags
/**
   * @openapi
   *  tags: 
   *    name: AdditionalCareproviderRouter
   *    description: The AdditionalCareproviderRouter managing API   
   */
//* swagger get method

/**
   * @openapi
   * paths:
   *  '/additionalCareprovider/{careprovider_uid}':
   *   get:
   *     tags: [AdditionalCareproviderRouter]
   *     summary: Return the AdditionalCareprovider.
   *     parameters:
   *     - in: path
   *       name: careprovider_uid
   *       description: Numeric ID of the careprovider to get
   *       required: true
   *       type: Integer
   *     responses:
   *       200:
   *         description: Success
   *       400:
   *         description: AdditionalCareprovider not found 
   */
additionalCareproviderRouter.get('/:careprovider_uid', makeCallback(getAdditionalCareprovider));


/**
   * @openapi
   * paths:
   *  '/additionalCareprovider/{careprovider_uid}':
   *   patch:
   *     tags: [AdditionalCareproviderRouter]
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
   *              $ref: '#/components/schemas/AdditionalCareprovider' 
   *     responses:
   *       200:
   *         description: Success
   *       404:
   *         description: Bad Request
   *       400:
   *         description: Notification not found
   */
additionalCareproviderRouter.patch('/:careprovider_uid',makeCallback(patchAdditionalCareprovider))

//* swagger post method
/**
   * @openapi
   * '/additionalCareprovider/new':
   *  post:
   *     tags: [AdditionalCareproviderRouter]
   *     summary: Create a new AdditionalCareprovider
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *              $ref: '#/components/schemas/AdditionalCareprovider'
   *     responses:
   *      200:
   *        description: Success
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
additionalCareproviderRouter.post('/new',makeCallback(postAdditionalCareprovider))


module.exports = additionalCareproviderRouter;
