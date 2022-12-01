const express = require("express");

const makeCallback = require("../helpers/express-callbacks");

const patientVisitRouter = express.Router({ mergeParams: true });
const { 
        getPatientVisit,
        getPatientVisitResult,
        getPatientVisitResultDownload,
        getPatientVisitResultImage 
      } = require("../PatientVisit/controllers");


//* swagger tags
/**
   * @openapi
   *  tags: 
   *    name: PatientVisit
   *    description: The PatientVisit managing API   
   */
//* swagger get method

//* swagger get method with params 
/**
   * @openapi
   * paths:
   *  '/patient-visit/{patient_id}':
   *   get:
   *     tags: [PatientVisit]
   *     summary: Return the PatientVisit.
   *     parameters:
   *     - in: path
   *       name: patient_id
   *       description: Numeric ID of the patient visit to get
   *       required: true
   *       type: Number
   *     - in: query
   *       name: page
   *       description: the number of page
   *       required: true
   *       type: Number
   *     - in: query
   *       name: limit
   *       description: the number of record in one page
   *       required: true
   *       type: Number    
   *     responses:
   *       200:
   *         description: Success
   *       400:
   *         description: Department not found
   */
 patientVisitRouter.get('/:patient_id', makeCallback(getPatientVisit));

/**
   * @openapi
   * paths:
   *  '/patient-visit/result/{patientvisit_id}':
   *   get:
   *     tags: [PatientVisit]
   *     summary: Return a list of careproviders inthe department.
   *     parameters:
   *     - in: path
   *       name: patientvisit_id
   *       description: Numeric ID of the patient visit to get
   *       required: true
   *       type: Number 
   *     - in: query
   *       name: result_type
   *       description: the types of result
   *       schema: 
   *         type: String
   *         enum: [Labs,Medicine,ICD10,X-ray,Download]
   *         require: true     
   *     responses:
   *       200:
   *         description: Success
   *       400:
   *         description:  not found
   */
 patientVisitRouter.get('/result/:patientvisit_id', makeCallback(getPatientVisitResult));


/**
   * @openapi
   * paths:
   *  '/patient-visit/result/download/{patientvisit_id}':
   *   get:
   *     tags: [PatientVisit]
   *     summary: Return a list of careproviders inthe department.
   *     parameters:
   *     - in: path
   *       name: patientvisit_id
   *       description: Numeric ID of the patient visit to get
   *       required: true
   *       type: Number
   *     - in: query
   *       name: result_type
   *       description: the types of result
   *       schema: 
   *         type: String
   *         enum: [Download]
   *         require: true 
   *     responses:
   *       200:
   *         description: Success
   *       400:
   *         description:  not found
   */
 patientVisitRouter.get('/result/download/:patientvisit_id', makeCallback(getPatientVisitResultDownload));


/**
   * @openapi
   * paths:
   *  '/patient-visit/result/image/{patient_uid}/{accessionNumber}':
   *   get:
   *     tags: [PatientVisit]
   *     summary: Return a group of images.
   *     parameters:
   *     - in: path
   *       name: patient_uid
   *       description: Numeric ID of the patient 
   *       required: true
   *       type: String
   *     - in: path
   *       name: accessionNumber
   *       description: accession number
   *       required: true
   *       type: String
   *     responses:
   *       200:
   *         description: Success
   *       400:
   *         description:  not found
   */
 patientVisitRouter.get('/result/image/:patient_uid/:accessionNumber', makeCallback(getPatientVisitResultImage));




module.exports = patientVisitRouter;
