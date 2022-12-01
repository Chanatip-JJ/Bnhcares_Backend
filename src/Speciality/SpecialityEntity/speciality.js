//* swagger documentation --> Speciality as below
/**
 * @openapi
 * components:
 *   schemas:
 *     Speciality:
 *       type: object
 *       properties:
 *          uid:
 *            type: integer
 *          uid_bconnect:
 *            type: integer
 *          uid_trackcare:
 *            type: integer               
 *          name:
 *            type: string  
 *          enable_status:
 *            type: string
 *            example: true/false   
 *          description:
 *            type: string                          
 *          status:
 *            type: string
 * */
module.exports = function buildSpeciality({validator,DateTime,FixedOffsetZone}) {
    return function makeSpeciality({
            uid,
            uid_bconnect,
            uid_trakcare,
            name,
            enable_status,
            description,
            status          
            } = {}) {
        return Object.freeze({
            getuid: () =>  uid || null,
            getuid_bconnect: () =>  uid_bconnect || null,
            getuid_trakcare: () =>  uid_trakcare || null,
            getname: () =>  name || null,
            getenable_status: () =>  enable_status || null,
            getdescription: () =>  description || null,
            getstatus: () =>  status || null,
        })
    }
}

