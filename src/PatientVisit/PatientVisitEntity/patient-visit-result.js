//* swagger documentation --> location as below
/**
 * @openapi
 * components:
 *   schemas:
 *     PatientVisitResult:
 *       type: object
 *       properties:
 *          result_type:
 *            type: string
 *            enum : [Labs,Medicine,ICD10,X-ray,Download]    
 *          patientVisit_id:
 *            type: integer                      
 */
module.exports = function buildGetPatientVisitResult({}) {
        return function makeGetPatientVisitResult({
            result_type,
            patientvisit_id
    } = {}) {
        const result_types = ['Labs','Medicine','ICD10','X-ray','Download'] 

        if(!result_type){
            throw new Error('Type of result must be supplied')
        }

        if(!result_types.includes(result_type)){
            throw new Error('Type of result is out of ranges')
        }

        if(!patientvisit_id){
            throw new Error('PatientVisit id must be supplied')
        }

        return Object.freeze({
            getResultType:() => result_type ,
            getPatientVisitUID: () =>  +patientvisit_id 
        })
    }
}

