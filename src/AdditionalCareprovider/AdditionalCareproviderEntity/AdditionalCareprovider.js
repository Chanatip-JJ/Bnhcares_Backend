//* swagger documentation --> Package  as below
/**
 * @swagger
 * components:
 *   schemas:
 *     AdditionalCareprovider:
 *       type: object
 *       properties:
 *          uid:
 *            type: integer      
 *          careprovider_uid_bconnect:
 *            type: integer
 *          isFullTime:
 *            type: boolean
 *          graduate_institution:
 *            type: string 
 *          speciality:
 *            type: string  
 *          graduation_year:
 *            type: integer
 *          academic_prefix:
 *            type: string
 *          clinical_interest:
 *            type: string     
 *          image:
 *            type: string 
 *          language:
 *            type: string
 * 
 */
 module.exports = function buildAdditionalCareprovider({}) {
    return function makeAdditionalCareprovider({
        uid,
        careprovider_uid_bconnect,
        isFullTime,
        graduate_institution,
        speciality,
        graduation_year,
        academic_prefix,
        clinical_interest,
        image,
        language
} = {}) {
    
    return Object.freeze({
        getUID : () => uid || null,
        getCareprovider_uid : () => careprovider_uid_bconnect || null,
        getIsFullTime:() => isFullTime || true,
        getGraduationInstitution: () => graduate_institution || null,
        getSpeciality : () => speciality || null,
        getGraduationYear : () => graduation_year || null,
        getAcademicPrefix : () => academic_prefix || null,
        getClinicalInterest:() => clinical_interest || null,
        getImage : () => image || null,
        getLanguage : () => language || null,
    })
}
}

