const express = require("express");
const makeCallback = require("../helpers/express-callbacks");
const packageCareproviderRouter = express.Router({ mergeParams: true });
const { getCareprovider,
        getPackageCareproviderID,
        postCareprovider,
        patchCareprovider,
        deletePackageCareprovider
      } = require("../PackageCareprovider/controllers");

//* swagger tags
/**
   * @openapi
   *  tags: 
   *    name: PackageCareProvider
   *    description: The Package managing API   
   */
//* swagger get method
/**
   * @openapi
   * '/packageCareProvider':
   *  get:
   *     tags: [PackageCareProvider]
   *     summary: Return a list of all packages.
   *     responses:
   *       200:
   *         description: Success
   */
//* swagger get,patch,delete method  
packageCareproviderRouter.get('',makeCallback(getCareprovider))
/**
   * @openapi
   * paths:
   *  '/packageCareProvider/{package_id}':
   *   get:
   *     tags: [PackageCareProvider]
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
   */
 packageCareproviderRouter.get('/:package_id', makeCallback(getPackageCareproviderID));


/**
   * @openapi
   * paths:
   *  '/packageCareProvider/delete/{uid}':
   *   delete:
   *     tags: [PackageCareProvider]
   *     summary: Delete the package
   *     parameters:
   *     - in: path
   *       name: uid
   *       description: Numeric ID of the package careprovider to delete
   *       required: true
   *       type: Integer 
   *     responses:
   *       200:
   *         description: Success
   *       400:
   *         description: unsuccessfully deleted 
   */
packageCareproviderRouter.delete('/delete/:uid', makeCallback(deletePackageCareprovider));

  /**
   * @openapi
   * paths:
   *  '/packageCareProvider/edit':
   *   patch:
   *     tags: [PackageCareProvider]
   *     summary: Edit the package 's careprovider
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/PackageCareprovider'
   *     responses:
   *       200:
   *         description: Success
   *       404:
   *         description: Bad Request
   *       400:
   *         description: Package not found
   */
  packageCareproviderRouter.patch('/edit',makeCallback(patchCareprovider))






//* swagger post method
/**
   * @openapi
   * '/packageCareProvider/new':
   *  post:
   *     tags: [PackageCareProvider]
   *     summary: Create mapping between a careprovider and a package
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/PackageCareprovider'
   *     responses:
   *      200:
   *        description: Success
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
packageCareproviderRouter.post('/new',makeCallback(postCareprovider))






module.exports = packageCareproviderRouter;
