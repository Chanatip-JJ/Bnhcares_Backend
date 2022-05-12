// validate input request.
module.exports = function buildGetOrderHeader({validator,DateTime,FixedOffsetZone}) {
    return function makeGetOrderHeader({
        ORDHD_NO,
        ORDHD_BUYERNO,
        ORDHD_FORNO,
        ORDHD_DATE,
        ORDHD_AMT,
        ORDHD_PAY_STATUS,
        ORDHD_USE_STATUS,
        ORDHD_PAID_NAME,
        ORDHD_PAID_BY,
        ORDHD_PAID_AMOUNT,
        ORDHD_PAID_DATE,
        ORDHD_PAID_AUTHENBY,
        ORDHD_HN_BY,
        ORDHD_HN_DATE,
        ORDHD_HN_AUTHENBY,
        ORDHD_RECEIVE_BY,
        ORDHD_RECEIVE_DATE,
        ORDHD_RECEIVE_AUTHENBY,
        ORDHD_USE_BY,
        ORDHD_USE_DATE,
        ORDHD_USE_AUTHENBY,
        ORDHD_REF1,
        ORDHD_REF2,
        ORDHD_REMARK,
        ORDHD_BUYER_NAME,
        ORDHD_DEPOSIT,
        ORDHD_INTERNAL_REG,
        ORDHD_INTERNAL_DEPOSIT,
        ORDHD_INTERNAL_BILL,
        ORDHD_REFERENCE_FROM,
        ORDHD_UTM_SOURCE,
        ORDHD_UTM_MEDIUM,
        ORDHD_UTM_CAMPAIGN,
        ORDHD_REFERENCE,
        ORDHD_STATUS = 'active',
        
} = {}) {
    
    return Object.freeze({
        getORDHD_NO: ()=> ORDHD_NO || null,
        getORDHD_BUYERNO: ()=> ORDHD_BUYERNO || null,
        getORDHD_FORNO: ()=> ORDHD_FORNO || null,
        getORDHD_DATE: ()=> ORDHD_DATE || null,
        getORDHD_AMT: ()=> ORDHD_AMT || null,
        getORDHD_PAY_STATUS: ()=> ORDHD_PAY_STATUS || null,
        getORDHD_USE_STATUS: ()=> ORDHD_USE_STATUS || null,
        getORDHD_PAID_NAME: ()=> ORDHD_PAID_NAME || null,
        getORDHD_PAID_BY: ()=> ORDHD_PAID_BY || null,
        getORDHD_PAID_AMOUNT: ()=> ORDHD_PAID_AMOUNT || null,
        getORDHD_PAID_DATE: ()=> ORDHD_PAID_DATE || null,
        getORDHD_PAID_AUTHENBY: ()=> ORDHD_PAID_AUTHENBY || null,
        getORDHD_HN_BY: ()=> ORDHD_HN_BY || null,
        getORDHD_HN_DATE: ()=> ORDHD_HN_DATE || null,
        getORDHD_HN_AUTHENBY: ()=> ORDHD_HN_AUTHENBY || null,
        getORDHD_RECEIVE_BY: ()=> ORDHD_RECEIVE_BY || null,
        getORDHD_RECEIVE_DATE: ()=> ORDHD_RECEIVE_DATE || null,
        getORDHD_RECEIVE_AUTHENBY: ()=> ORDHD_RECEIVE_AUTHENBY || null,
        getORDHD_USE_BY: ()=> ORDHD_USE_BY || null,
        getORDHD_USE_DATE: ()=> ORDHD_USE_DATE || null,
        getORDHD_USE_AUTHENBY: ()=> ORDHD_USE_AUTHENBY || null,
        getORDHD_REF1: ()=> ORDHD_REF1 || null,
        getORDHD_REF2: ()=> ORDHD_REF2 || null,
        getORDHD_REMARK: ()=> ORDHD_REMARK || null,
        getORDHD_BUYER_NAME: ()=> ORDHD_BUYER_NAME || null,
        getORDHD_DEPOSIT: ()=> ORDHD_DEPOSIT || null,
        getORDHD_INTERNAL_REG: ()=> ORDHD_INTERNAL_REG || null,
        getORDHD_INTERNAL_DEPOSIT: ()=> ORDHD_INTERNAL_DEPOSIT || null,
        getORDHD_INTERNAL_BILL: ()=> ORDHD_INTERNAL_BILL || null,
        getORDHD_REFERENCE_FROM: ()=> ORDHD_REFERENCE_FROM || null,
        getORDHD_UTM_SOURCE: ()=> ORDHD_UTM_SOURCE || null,
        getORDHD_UTM_MEDIUM: ()=> ORDHD_UTM_MEDIUM || null,
        getORDHD_UTM_CAMPAIGN: ()=> ORDHD_UTM_CAMPAIGN || null,
        getORDHD_REFERENCE: ()=> ORDHD_REFERENCE || null,
        getORDHD_STATUS: ()=> ORDHD_STATUS || null,
    })
}
}


