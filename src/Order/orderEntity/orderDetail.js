//* swagger documentation --> OrderHeader  as below
/**
 * @swagger
 * components:
 *   schemas:
 *     OrderDetail:
 *       type: object
 *       properties:
 *          ORDDT_NO:
 *            type: integer
 *          ORDDT_LINENO:
 *            type: integer  
 *          ORDDT_ITEM_NO:
 *            type: integer    
 *          ORDDT_NAMETH:
 *            type: string
 *          ORDDT_NAMEEN:
 *            type: string
 *          ORDDT_NAME_USER:
 *            type: string
 *          ORDDT_DOB:
 *            type: string     
 *          ORDDT_DETAILTH:
 *            type: string   
 *          ORDDT_DETAILEN:
 *            type: string   
 *          ORDDT_REF1:
 *            type: string
 *          pORDDT_REF2:
 *            type: string
 *          ORDDT_REGULARPRICE:
 *            type: number  
 *          ORDDT_FINALPRICE:
 *            type: number   
 *          ORDDT_BCONNECTSALECODE:
 *            type: string   
 *          ORDDT_STATUS:
 *            type: string   
 *          ORDDT_USE_BY:
 *            type: string   
 *          ORDDT_USE_DATE:
 *            type: string
 *            format: date-time   
 *          ORDDT_USE_AUTHENBY:
 *            type: string    
 *          ORDDT_USE_HN:
 *            type: string
 *          ORDDT_BOOK_ID:
 *            type: string
 *          ORDDT_BOOK_TYPE:
 *            type: string
 *          ORDDT_NOTE:
 *            type: string      
 *          ORDDT_REMARK:
 *            type: string
 *          ORDDT_UTM_SOURCE:
 *            type: string  
 *          ORDDT_UTM_MEDIUM:
 *            type: string  
 *          ORDDT_UTM_CAMPAIGN:
 *            type: string                        
 */
module.exports = function buildOrderDetail({validator,DateTime,FixedOffsetZone}) {
    return function makeOrderDetail({
            ORDDT_NO,
            ORDDT_LINENO,
            ORDDT_ITEM_NO,
            ORDDT_NAMETH,
            ORDDT_NAMEEN,
            ORDDT_NAME_USER,
            ORDDT_DOB,
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
            ORDDT_NOTE,
            ORDDT_REMARK,
            ORDDT_UTM_SOURCE,
            ORDDT_UTM_MEDIUM,
            ORDDT_UTM_CAMPAIGN,
            NEW_BOOKING_ID
} = {}) {

        if(ORDDT_USE_DATE){
            var adaptUSE_DATE = adaptDate(ORDDT_USE_DATE)
        }
        return Object.freeze({
            getORDDT_NO :()=> ORDDT_NO || null,
            getORDDT_LINENO :()=> ORDDT_LINENO,
            getORDDT_ITEM_NO :()=> ORDDT_ITEM_NO || null,
            getORDDT_NAMETH :()=> ORDDT_NAMETH || null,
            getORDDT_NAMEEN :()=> ORDDT_NAMEEN || null,
            getORDDT_NAME_USER :() => ORDDT_NAME_USER || null,
            getORDDT_DOB:() => ORDDT_DOB || null,
            getORDDT_DETAILTH :()=> ORDDT_DETAILTH || null,
            getORDDT_DETAILEN :()=> ORDDT_DETAILEN || null,
            getORDDT_REF1 :()=> ORDDT_REF1 || null,
            getORDDT_REF2 :()=> ORDDT_REF2 || null,
            getORDDT_REGULARPRICE :()=> ORDDT_REGULARPRICE || null,
            getORDDT_FINALPRICE :()=> ORDDT_FINALPRICE || null,
            getORDDT_BCONNECTSALECODE :()=> ORDDT_BCONNECTSALECODE || null,
            getORDDT_STATUS :()=> ORDDT_STATUS || null,
            getORDDT_USE_BY :()=> ORDDT_USE_BY || null,
            getORDDT_USE_DATE :()=> adaptUSE_DATE || null,
            getORDDT_USE_AUTHENBY :()=> ORDDT_USE_AUTHENBY || null,
            getORDDT_USE_HN :()=> ORDDT_USE_HN || null,
            getORDDT_BOOK_ID :()=> ORDDT_BOOK_ID || null,
            getORDDT_BOOK_TYPE :()=> ORDDT_BOOK_TYPE || null,
            getORDDT_NOTE:() => ORDDT_NOTE || null,
            getORDDT_REMARK:() => ORDDT_REMARK || null,
            getORDDT_UTM_SOURCE: ()=> ORDDT_UTM_SOURCE || null,
            getORDDT_UTM_MEDIUM: ()=> ORDDT_UTM_MEDIUM || null,
            getORDDT_UTM_CAMPAIGN: ()=> ORDDT_UTM_CAMPAIGN || null,
            getNEW_BOOKING_ID: ()=> NEW_BOOKING_ID || null
        })

        function adaptDate(Date){
            const luxon_date = DateTime.fromISO(Date).setZone(FixedOffsetZone.parseSpecifier("GMT+7")).startOf("day")
            const JS_Date = luxon_date.plus({ hours: 7 }).toJSDate()
            return JS_Date
        }
    }
}



