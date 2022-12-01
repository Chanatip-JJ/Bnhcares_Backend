const express = require("express");

const makeCallback = require("../helpers/express-callbacks");
const checkCareproviderAccess = require('../middleware/checkCareproviderAccess')
const careproviderRouter = express.Router({ mergeParams: true });
const { getCareProvider,
        getCareProviderID,
        patchCareProvider,
        searchCareProvider,
        getLocation,
        getWorkingHour
      } = require("../Careprovider/controllers");

//* swagger tags
/**
   * @openapi
   *  tags: 
   *    name: Careprovider
   *    description: The CareProvider managing API
   *     
   */
//* swagger get method
/**
   * @openapi
   * '/careprovider':
   *  get:
   *     tags: [Careprovider]
   *     summary: Return a list of all careprovider.
   *     responses:
   *       200:
   *         description: Success
   */
careproviderRouter.get('',makeCallback(getCareProvider))

/**
   * @openapi
   * '/careprovider/search':
   *  get:
   *     tags: [Careprovider]
   *     summary: Return a list of careproviders according to param query.
   *     parameters:
   *     - in: query
   *       name: search_value
   *       schema: 
   *          type: string 
   *       description: query for careprovider 's firstname and lastname. 
   *       required: true
   *     responses:
   *       200:
   *         description: Success
   */
 careproviderRouter.get('/search', makeCallback(searchCareProvider))

//* swagger get,patch method  
/**
   * @openapi
   * paths:
   *  '/careprovider/{careprovider_id}':
   *   get:
   *     tags: [Careprovider]
   *     summary: Return the careprovider.
   *     parameters:
   *     - in: path
   *       name: careprovider_id
   *       description: Numeric ID of the careprovider to get
   *       required: true
   *       type: Number 
   *     responses:
   *       200:
   *         description: Success
   *       400:
   *         description: CareProvider not found
   *   patch:
   *     tags: [Careprovider]
   *     summary: Edit the careprovider
   *     parameters:
   *     - in: path
   *       name: careprovider_id
   *       description: Numeric ID of the careprovider to update
   *       required: true
   *       type: Integer
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/Careprovider' 
   *     responses:
   *       200:
   *         description: Success
   *       404:
   *         description: Bad Request
   *       400:
   *         description: Location not found
   */
careproviderRouter.get('/:careprovider_id', makeCallback(getCareProviderID));
careproviderRouter.patch(`/:careprovider_id`,makeCallback(patchCareProvider))

/**
   * @openapi
   * paths:
   *  '/careprovider/{careprovider_id}/location':
   *   get:
   *     tags: [Careprovider]
   *     summary: Return locations that the careprovider are working.
   *     parameters:
   *     - in: path
   *       name: careprovider_id
   *       description: Numeric ID of the careprovider to get
   *       required: true
   *       type: Number 
   *     responses:
   *       200:
   *         description: Success
   *       400:
   *         description: CareProvider not found
   */
 careproviderRouter.get(`/:careprovider_id/location`,makeCallback(getLocation)) 


/**
   * @openapi
   * paths:
   *  '/careprovider/onSchedule/{careprovider_id}/{location_id}':
   *   get:
   *     tags: [Careprovider]
   *     summary: Return time schedule  that the careprovider are working.
   *     parameters:
   *     - in: path
   *       name: careprovider_id
   *       description: Numeric ID of the careprovider to get
   *       required: true
   *       type: Number
   *     - in: path
   *       name: location_id
   *       description: Numeric ID of the location to get
   *       required: true
   *       type: Number  
   *     responses:
   *       200:
   *         description: Success
   *       400:
   *         description: Not found
   */
 careproviderRouter.get(`/onSchedule/:careprovider_id/:location_id`,makeCallback(getWorkingHour)) 



module.exports = careproviderRouter;
