// validate input request.
module.exports = function buildOrderDetail({validator,DateTime,FixedOffsetZone}) {
    return function makeOrderDetail({
            ORDDT_NO,
            ORDDT_LINENO,
            ORDDT_ITEM_NO,
            ORDDT_NAMETH,
            ORDDT_NAMEEN,
            ORDDT_DETAILTH,
            ORDDT_DETAILEN,
            ORDDT_REF1,
            ORDDT_REF2,
            ORDDT_REGULARPRICE,
            ORDDT_FINALPRICE,
            ORDDT_BCONNECTSALECODE,
            ORDDT_STATUS,
            ORDDT_USE_BY,
            ORDDT_USE_DATE,
            ORDDT_USE_AUTHENBY,
            ORDDT_USE_HN,
            ORDDT_BOOK_ID,
            ORDDT_BOOK_TYPE,
            
        
} = {}) {
    
        return Object.freeze({
            getORDDT_NO :()=> ORDDT_NO || null,
            getORDDT_LINENO :()=> ORDDT_LINENO ,  //?? 0 || null -> return null
            getORDDT_ITEM_NO :()=> ORDDT_ITEM_NO || null,
            getORDDT_NAMETH :()=> ORDDT_NAMETH || null,
            getORDDT_NAMEEN :()=> ORDDT_NAMEEN || null,
            getORDDT_DETAILTH :()=> ORDDT_DETAILTH || null,
            getORDDT_DETAILEN :()=> ORDDT_DETAILEN || null,
            getORDDT_REF1 :()=> ORDDT_REF1 || null,
            getORDDT_REF2 :()=> ORDDT_REF2 || null,
            getORDDT_REGULARPRICE :()=> ORDDT_REGULARPRICE || null,
            getORDDT_FINALPRICE :()=> ORDDT_FINALPRICE || null,
            getORDDT_BCONNECTSALECODE :()=> ORDDT_BCONNECTSALECODE || null,
            getORDDT_STATUS :()=> ORDDT_STATUS || null,
            getORDDT_USE_BY :()=> ORDDT_USE_BY || null,
            getORDDT_USE_DATE :()=> ORDDT_USE_DATE || null,
            getORDDT_USE_AUTHENBY :()=> ORDDT_USE_AUTHENBY || null,
            getORDDT_USE_HN :()=> ORDDT_USE_HN || null,
            getORDDT_BOOK_ID :()=> ORDDT_BOOK_ID || null,
            getORDDT_BOOK_TYPE :()=> ORDDT_BOOK_TYPE || null,
        })
    }
}



