//* swagger documentation --> location as below
/**
 * @openapi
 * components:
 *   schemas:
 *     PatientVisit:
 *       type: object
 *       properties:
 *          patient_id:
 *            type: integer
 *          page:
 *            type: integer
 *          limit:
 *            type: integer                             
 */
module.exports = function buildGetPatientVisit({}) {
    return function makeGetPatientVisit({
        patient_id,
        page,
        limit,
         } = {}) {

        const DEFAULT_PAGE = 1

        const DEFAULT_LIMIT = 10

        if(!patient_id){
            throw new Error('Patient id must be supplied')
        }

        return Object.freeze({
        getPatientUID: () =>  patient_id || null,
        getPage: () =>  page || DEFAULT_PAGE,
        getLimit: () =>  limit || DEFAULT_LIMIT    
        })
    }
}

