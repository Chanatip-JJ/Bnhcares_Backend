const express = require("express");
const makeCallback = require("../helpers/express-callbacks");
const doctorAppointmentManagementRouter = express.Router({ mergeParams: true });
const { getDoctorAppointmentManagementByLocation,
        getDoctorAppointmentManagementByCareprovider, 
        postDoctorAppointmentManagement,
        patchDoctorAppointmentManagement
      } = require("../DoctorAppointmentManagement/controllers");

//* swagger tags
/**
   * @openapi
   *  tags: 
   *    name: DoctorAppointmentManagement
   *    description: The DoctorAppointmentManagement managing API   
   */
//* swagger get method

/**
   * @openapi
   * paths:
   *  '/doctorAppointmentManagement/location/{location_uid}':
   *   get:
   *     tags: [DoctorAppointmentManagement]
   *     summary: Return the DoctorAppointmentManagement.
   *     parameters:
   *     - in: path
   *       name: location_uid
   *       description: Numeric ID of the location to get
   *       required: true
   *       type: Integer
   *     responses:
   *       200:
   *         description: Success
   *       400:
   *         description: DoctorAppointmentManagement not found 
   */
 doctorAppointmentManagementRouter.get('/location/:location_uid', makeCallback(getDoctorAppointmentManagementByLocation));



/**
   * @openapi
   * paths:
   *  '/doctorAppointmentManagement/careprovider/{careprovider_uid}':
   *   get:
   *     tags: [DoctorAppointmentManagement]
   *     summary: Return the DoctorAppointmentManagement.
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
   *         description: DoctorAppointmentManagement not found 
   */
 doctorAppointmentManagementRouter.get('/careprovider/:careprovider_uid', makeCallback(getDoctorAppointmentManagementByCareprovider));



/**
   * @openapi
   * paths:
   *  '/doctorAppointmentManagement/{uid}':
   *   patch:
   *     tags: [DoctorAppointmentManagement]
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
   *              $ref: '#/components/schemas/DoctorAppointmentManagement' 
   *     responses:
   *       200:
   *         description: Success
   *       404:
   *         description: Bad Request
   *       400:
   *         description: Notification not found
   */
 doctorAppointmentManagementRouter.patch('/:uid',makeCallback(patchDoctorAppointmentManagement))

//* swagger post method
/**
   * @openapi
   * '/doctorAppointmentManagement/new':
   *  post:
   *     tags: [DoctorAppointmentManagement]
   *     summary: Create a new DoctorAppointmentManagement
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *              $ref: '#/components/schemas/DoctorAppointmentManagement'
   *     responses:
   *      200:
   *        description: Success
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
 doctorAppointmentManagementRouter.post('/new',makeCallback(postDoctorAppointmentManagement))



module.exports = doctorAppointmentManagementRouter;
