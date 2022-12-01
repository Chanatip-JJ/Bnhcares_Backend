//* swagger documentation --> Person  as below
/**
 * @openapi
 * components:
 *   schemas:
 *     Person:
 *       type: object
 *       properties:
 *          PERSON_NO:
 *            type: integer
 *          PERSON_TYPE:
 *            type: integer  
 *          PERSON_HN:
 *            type: string   
 *          PERSON_LINEID:
 *            type: string
 *          PERSON_NAME:
 *            type: string 
 *          PERSON_LNAME:
 *            type: string 
 *          PERSON_DOB:
 *            type: string   
 *          PERSON_GENDER:
 *            type: string   
 *          PERSON_EMAIL:
 *            type: string
 *          PERSON_MOBILE:
 *            type: string   
 *          PERSON_LINK_NO:
 *            type: integer   
 *          PERSON_LINK_TYPE:
 *            type: string   
 *          PERSON_STATUS:
 *            type: string     
 *          PERSON_REMARK:
 *            type: string   
 *          PERSON_PASSWORD:
 *            type: string
 *          PERSON_REG_SENT:
 *            type: integer  
 */
module.exports = function buildPerson({validator,DateTime,FixedOffsetZone}) {
    return function makePerson({
            PERSON_NO,
            PERSON_TYPE,
            PERSON_HN,
            USER_UID,
            PERSON_LINEID,
            PERSON_FNAME,
            PERSON_MNAME,
            PERSON_LNAME,
            PERSON_DOB,
            PERSON_GENDER,
            PERSON_CID_PASSNO ,
            PERSON_NATION,
            PERSON_RACE ,
            PERSON_EMAIL,
            PERSON_MOBILE,
            PERSON_LINK_NO,
            PERSON_LINK_TYPE,
            PERSON_STATUS,
            PERSON_REMARK,
            PERSON_PASSWORD,
            PERSON_REG_SENT,
    } = {}) {
        
        return Object.freeze({
            getPERSON_NO: () => PERSON_NO || null ,
            getPERSON_TYPE: () => PERSON_TYPE || null ,
            getPERSON_HN: () => PERSON_HN || null ,
            getUSER_UID: () => USER_UID || null ,
            getPERSON_LINEID: () => PERSON_LINEID || null ,
            getPERSON_FNAME: () => PERSON_FNAME || null ,
            getPERSON_MNAME: () => PERSON_MNAME || null ,
            getPERSON_LNAME: () => PERSON_LNAME || null ,
            getPERSON_DOB: () => PERSON_DOB || null ,
            getPERSON_GENDER: () => PERSON_GENDER || null ,
            getPERSON_CID_PASSNO: () => PERSON_CID_PASSNO || null ,
            getPERSON_NATION: () => PERSON_NATION || null ,
            getPERSON_RACE: () => PERSON_RACE || null ,
            getPERSON_EMAIL: () => PERSON_EMAIL || null ,
            getPERSON_MOBILE: () => PERSON_MOBILE || null ,
            getPERSON_LINK_NO: () => PERSON_LINK_NO || null ,
            getPERSON_LINK_TYPE: () => PERSON_LINK_TYPE || null ,
            getPERSON_STATUS: () => PERSON_STATUS || null ,
            getPERSON_REMARK: () => PERSON_REMARK || null ,
            getPERSON_PASSWORD: () => PERSON_PASSWORD || null ,
            getPERSON_REG_SENT: () => PERSON_REG_SENT || null ,
        })
    }
}

