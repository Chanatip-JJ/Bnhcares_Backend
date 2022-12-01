//* swagger documentation --> Careprovider  as below
/**
 * @openapi
 * components:
 *   schemas:
 *     Careprovider:
 *       type: object
 *       properties:
 *          uid:
 *            type: integer
 *          uid_bconnect:
 *            type: integer
 *          uid_trackcare:
 *            type: integer               
 *          title_th:
 *            type: string  
 *          firstname_th:
 *            type: string   
 *          middlename_th:
 *            type: string
 *          lastname_th:
 *            type: string 
 *          title_en:
 *            type: string  
 *          firstname_en:
 *            type: string   
 *          middlename_en:
 *            type: string
 *          lastname_en:
 *            type: string
 *          gender:
 *            type: string   
 *          description_th:
 *            type: string  
 *          description_en:
 *            type: string  
 *          specialty_type:
 *            type: string   
 *          clinicalType:
 *            type: string   
 *          status:
 *            type: string   
 *          license_no:
 *            type: string   
 *          nativelanguage:
 *            type: string   
 */
module.exports = function buildCareProvider({validator,DateTime,FixedOffsetZone}) {
    return function makeCareProvider({
            uid,
            uid_bconnect,
            uid_trackcare,
            title_th,
            firstname_th,
            middlename_th,
            lastname_th,
            title_en,
            firstname_en,
            middlename_en,
            lastname_en,
            gender,
            description_th,
            description_en,
            specialty_type,
            clinical_type,
            status,
            license_no,
            native_language
            } = {}) {
        
        return Object.freeze({
            getuid:() =>  uid || null,
            getuid_bconnect:() =>  uid_bconnect || null,
            getuid_trackcare:() =>  uid_trackcare || null,
            gettitle_th:() =>  title_th || null,
            getfirstname_th:() =>  firstname_th || null,
            getmiddlename_th:() =>  middlename_th || null,
            getlastname_th:() =>  lastname_th || null,
            gettitle_en:() =>  title_en || null,
            getfirstname_en:() =>  firstname_en || null,
            getmiddlename_en:() =>  middlename_en || null,
            getlastname_en:() =>  lastname_en || null,
            getgender:() =>  gender || null,
            getdescription_th:() =>  description_th || null,
            getdescription_en:() =>  description_en || null,
            getspecialty_type:() =>  specialty_type || null,
            getclinical_type:() =>  clinical_type || null,
            getstatus:() =>  status || null,
            getlicense_no:() =>  license_no || null,
            getnative_language:() =>  native_language || null
        })
    }
}

