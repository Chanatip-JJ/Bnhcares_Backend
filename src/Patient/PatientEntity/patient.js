//* swagger documentation -->  as below
/**
 * @openapi
 * components:
 *   schemas:
 *     Patient:
 *       type: object
 *       properties:
 *          HN:
 *            type: string
 *          FirstName:
 *            type: string
 *          LastName:
 *            type: string               
 * */
 module.exports = function buildGetPatient({}) {
    return function makeGetPatient({
        HN,
        FirstName,
        LastName   
} = {}) {
    
        return Object.freeze({
            getHN: () =>  HN || null,
            getFirst_name: () =>  FirstName || null,
            getLast_name: () =>  LastName || null,
        })
    }
}

