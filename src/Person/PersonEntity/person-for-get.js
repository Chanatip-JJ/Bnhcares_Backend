module.exports = function buildGetPerson({}) {
        return function makeGetPerson({
        PERSON_NO,
        PERSON_TYPE,
        PERSON_HN,
        PERSON_LINEID,
        PERSON_NAME,
        PERSON_LNAME,
        PERSON_DOB,
        PERSON_GENDER,
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
             getPERSON_NO: () => +PERSON_NO || null ,
             getPERSON_TYPE: () => PERSON_TYPE || null ,
             getPERSON_HN: () => PERSON_HN || null ,
             getPERSON_LINEID: () => PERSON_LINEID || null ,
             getPERSON_NAME: () => PERSON_NAME || null ,
             getPERSON_LNAME: () => PERSON_LNAME || null ,
             getPERSON_DOB: () => PERSON_DOB || null ,
             getPERSON_GENDER: () => PERSON_GENDER || null ,
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

