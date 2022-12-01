const express = require("express");
const makeCallback = require("../helpers/express-callbacks");
const checkPackageAccess =  require('../middleware/checkPackageAccess')
const packageRouter = express.Router({ mergeParams: true });
const { getPackage,
        getPackageID,
        deletePackage,
        postPackage,
        patchPackage
      } = require("../Package/controllers");
      

//* swagger tags
/**
   * @openapi
   *  tags: 
   *    name: Package
   *    description: The Package managing API   
   */
//* swagger get method
/**
   * @openapi
   * '/packages':
   *  get:
   *     tags: [Package]
   *     summary: Return a list of all packages.
   *     responses:
   *       200:
   *         description: Success
   */
//* swagger get,patch,delete method  
packageRouter.get('',makeCallback(getPackage))
/**
   * @openapi
   * paths:
   *  '/packages/{package_id}':
   *   get:
   *     tags: [Package]
   *     summary: Return the package.
   *     parameters:
   *     - in: path
   *       name: package_id
   *       description: Numeric ID of the package to get
   *       required: true
   *       type: Number 
   *     responses:
   *       200:
   *         description: Success
   *       400:
   *         description: Package not found
   *   delete:
   *     tags: [Package]
   *     summary: Delete the package
   *     parameters:
   *     - in: path
   *       name: package_id
   *       description: Numeric ID of the package to delete
   *       required: true
   *       type: Integer 
   *     responses:
   *       200:
   *         description: Success
   *       400:
   *         description: unsuccessfully deleted 
   *   patch:
   *     tags: [Package]
   *     summary: Edit the package
   *     parameters:
   *     - in: path
   *       name: package_id
   *       description: Numeric ID of the package to update
   *       required: true
   *       type: Integer
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/Package' 
   *     responses:
   *       200:
   *         description: Success
   *       404:
   *         description: Bad Request
   *       400:
   *         description: Package not found
   */
packageRouter.get('/:package_id',makeCallback(getPackageID));
packageRouter.delete('/:package_id',makeCallback(deletePackage));
packageRouter.patch(`/:package_id`,makeCallback(patchPackage))

//* swagger post method
/**
   * @openapi
   * '/packages/new':
   *  post:
   *     tags: [Package]
   *     summary: Create a new package
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/Package'
   *     responses:
   *      200:
   *        description: Success
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
packageRouter.post('/new',makeCallback(postPackage))






module.exports = packageRouter;
