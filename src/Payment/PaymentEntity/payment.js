// validate input request.
module.exports = function buildPayment({validator,DateTime,FixedOffsetZone}) {
    return function makePayment({
            NO = {},
            ORDER_ID,
            SYSTEM,
            REF_CODE,
            AMOUNT,
            PAID_AGENT,
            MASKED_PAN,
            APPROVAL_CODE,
            TRANSACTION_REF,
            PROCESS_BY,
            CHANNEL_RESPONE,
            PAYMENT_STATUS,
            JSON_2C2P,
    } = {}) {
        
        return Object.freeze({
            getNO:() => NO || null,
            getORDER_ID:() => ORDER_ID || null,
            getSYSTEM:() => SYSTEM || null,
            getREF_CODE:() => REF_CODE || null,
            getAMOUNT:() => AMOUNT || null,
            getPAID_AGENT:() => PAID_AGENT || null,
            getMASKED_PAN:() => MASKED_PAN || null,
            getAPPROVAL_CODE:() => APPROVAL_CODE || null,
            getTRANSACTION_REF:() => TRANSACTION_REF || null,
            getPROCESS_BY:() => PROCESS_BY || null,
            getCHANNEL_RESPONE:() => CHANNEL_RESPONE || null,
            getPAYMENT_STATUS:() => PAYMENT_STATUS || null,
            getJSON_2C2P:() => JSON.stringify(JSON_2C2P) || null 
        })
    }
}

