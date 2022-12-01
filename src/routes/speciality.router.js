const express = require("express");

const makeCallback = require("../helpers/express-callbacks");

const specialityRouter = express.Router({ mergeParams: true });
const { getSpeciality,
        getSpecialityID,
        getSearchSpeciality,
        getCareProvider
      } = require("../Speciality/controllers");

//* swagger tags
/**
   * @openapi
   *  tags: 
   *    name: Speciality
   *    description: The Speciality managing API   
   */

/**
   * @openapi
   * '/speciality/search':
   *  get:
   *     tags: [Speciality]
   *     summary: Return a list of speciality according to query param.
   *     parameters:
   *     - in: query
   *       name: search_value
   *       schema: 
   *          type: string 
   *       description: query for speciality. 
   *       required: true
   *     responses:
   *       200:
   *         description: Success
   */

specialityRouter.get('/search', makeCallback(getSearchSpeciality))

//* swagger get method
/**
   * @openapi
   * '/speciality':
   *  get:
   *     tags: [Speciality]
   *     summary: Return a list of all speciality.
   *     responses:
   *       200:
   *         description: Success
   */
specialityRouter.get('',makeCallback(getSpeciality))
//* swagger get method with params 
/**
   * @openapi
   * paths:
   *  '/speciality/{speciality_id}':
   *   get:
   *     tags: [Speciality]
   *     summary: Return the speciality.
   *     parameters:
   *     - in: path
   *       name: speciality_id
   *       description: Numeric ID of the speciality to get
   *       required: true
   *       type: Number 
   *     responses:
   *       200:
   *         description: Success
   *       400:
   *         description: Speciality not found
   */
specialityRouter.get('/:speciality_id', makeCallback(getSpecialityID));


/**
   * @openapi
   * paths:
   *  '/speciality/{speciality_id}/careprovider':
   *   get:
   *     tags: [Speciality]
   *     summary: Return a list of careproviders in the speciality.
   *     parameters:
   *     - in: path
   *       name: speciality_id
   *       description: Numeric ID of the speciality to get
   *       required: true
   *       type: Number 
   *     responses:
   *       200:
   *         description: Success
   *       400:
   *         description: Speciality not found
   */
 specialityRouter.get('/:speciality_id/careprovider', makeCallback(getCareProvider));









module.exports = specialityRouter;
