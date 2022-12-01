const express = require("express");

const makeCallback = require("../helpers/express-callbacks");

const patientRouter = express.Router({ mergeParams: true });
const { getPatientHN,
        getPatient,
        getPatientUser
      } = require("../Patient/controllers");

//* swagger tags
/**
   * @openapi
   *  tags: 
   *    name: Patient
   *    description: The Patient managing API   
   */

  //* swagger get method with params 
  /**
     * @openapi
     * paths:
     *  '/patient/search':
     *   get:
     *     tags: [Patient]
     *     summary: Return the patient.
     *     parameters:
     *     - in: query
     *       name: HN
     *       description: hospital number to get patient detail
     *       type: string
     *     - in: query
     *       name: FirstName
     *       description: search by first name
     *       type: string
     *     - in: query
     *       name: LastName
     *       description: search by last name
     *       type: string
     *     responses:
     *       200:
     *         description: Success
     *       400:
     *         description: Patient not found
     */
   patientRouter.get('/search', makeCallback(getPatient));

//* swagger get method with params 
/**
   * @openapi
   * paths:
   *  '/patient/{HN}':
   *   get:
   *     tags: [Patient]
   *     summary: Return the patient detail.
   *     parameters:
   *     - in: path
   *       name: HN
   *       description: hospital number to get patient detail
   *       required: true
   *       type: Number 
   *     responses:
   *       200:
   *         description: Success
   *       400:
   *         description: Patient not found
   */
patientRouter.get('/:HN', makeCallback(getPatientHN));




/**
   * @openapi
   * paths:
   *  '/patient/user/{HN}':
   *   get:
   *     tags: [Patient]
   *     summary: Return the patient detail.
   *     parameters:
   *     - in: path
   *       name: HN
   *       description: hospital number to get patient detail
   *       required: true
   *       type: Number 
   *     responses:
   *       200:
   *         description: Success
   *       400:
   *         description: Patient not found
   */
 patientRouter.get('/user/:HN', makeCallback(getPatientUser));



module.exports = patientRouter;
