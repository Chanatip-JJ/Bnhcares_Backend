const express = require("express");

const makeCallback = require("../helpers/express-callbacks");

const departmentRouter = express.Router({ mergeParams: true });
const { getDepartment,
        getDepartmentID,
        getCareProviderInDepartment
      } = require("../Department/controllers");


//* swagger tags
/**
   * @openapi
   *  tags: 
   *    name: Department
   *    description: The Department managing API   
   */
//* swagger get method
/**
   * @openapi
   * '/department':
   *  get:
   *     tags: [Department]
   *     summary: Return a list of all department.
   *     responses:
   *       200:
   *         description: Success
   */
departmentRouter.get('',makeCallback(getDepartment))
//* swagger get method with params 
/**
   * @openapi
   * paths:
   *  '/department/{department_id}':
   *   get:
   *     tags: [Department]
   *     summary: Return the department.
   *     parameters:
   *     - in: path
   *       name: department_id
   *       description: Numeric ID of the department to get
   *       required: true
   *       type: Number 
   *     responses:
   *       200:
   *         description: Success
   *       400:
   *         description: Department not found
   */
departmentRouter.get('/:department_id', makeCallback(getDepartmentID));

/**
   * @openapi
   * paths:
   *  '/department/{department_id}/careprovider':
   *   get:
   *     tags: [Department]
   *     summary: Return a list of careproviders inthe department.
   *     parameters:
   *     - in: path
   *       name: department_id
   *       description: Numeric ID of the department to get
   *       required: true
   *       type: Number 
   *     responses:
   *       200:
   *         description: Success
   *       400:
   *         description: Department not found
   */
 departmentRouter.get('/:department_id/careprovider', makeCallback(getCareProviderInDepartment));









module.exports = departmentRouter;
