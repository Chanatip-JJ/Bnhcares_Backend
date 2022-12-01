//* swagger documentation --> OrderHeader  as below
/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       properties:
 *          ORDHD_NO:
 *            type: integer  
 *          ORDHD_BUYERNO:
 *            type: integer  
 *          ORDHD_FORNO:
 *            type: integer  
 *          ORDHD_DATE:
 *            type: string
 *            format: date-time    
 *          ORDHD_AMT:
 *            type: number
 *            format: double
 *          ORDHD_PAY_STATUS:
 *            type: string  
 *          ORDHD_USE_STATUS:
 *            type: string  
 *          ORDHD_PAID_NAME:
 *            type: string  
 *          ORDHD_PAID_BY:
 *            type: string  
 *          ORDHD_PAID_AMOUNT:
 *            type: number
 *            format: double 
 *          ORDHD_PAID_DATE:
 *            type: string
 *            format: date-time   
 *          ORDHD_PAID_AUTHENBY:
 *            type: string  
 *          ORDHD_HN_BY:
 *            type: string  
 *          ORDHD_HN_DATE:
 *            type: string
 *            format: date-time  
 *          ORDHD_HN_AUTHENBY:
 *            type: string  
 *          ORDHD_RECEIVE_BY:
 *            type: string  
 *          ORDHD_RECEIVE_DATE:
 *            type: string
 *            format: date-time  
 *          ORDHD_RECEIVE_AUTHENBY:
 *            type: string 
 *          ORDHD_USE_BY:
 *            type: string  
 *          ORDHD_USE_DATE:
 *            type: string
 *            format: date-time  
 *          ORDHD_USE_AUTHENBY:
 *            type: string  
 *          ORDHD_REF1:
 *            type: string  
 *          ORDHD_REF2:
 *            type: string  
 *          ORDHD_REMARK:
 *            type: string  
 *          ORDHD_BUYER_NAME:
 *            type: string  
 *          ORDHD_DEPOSIT:
 *            type: string  
 *          ORDHD_INTERNAL_REG:
 *            type: string  
 *          ORDHD_INTERNAL_DEPOSIT:
 *            type: string  
 *          ORDHD_INTERNAL_BILL:
 *            type: string  
 *          ORDHD_REFERENCE_FROM:
 *            type: string  
 *          ORDHD_REFERENCE:
 *            type: string  
 *          ORDHD_STATUS:
 *            type: string  
 *          details:
 *            type: array
 *            items:    
 *              $ref: '#/components/schemas/OrderDetail'
 *            
 */
module.exports = function buildOrderHeader({validator,DateTime,FixedOffsetZone}) {
        return function makeOrderHeader({
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
            ORDHD_PAYMENT_REF,
            ORDHD_REF1,
            ORDHD_REF2,
            ORDHD_REMARK,
            ORDHD_BUYER_NAME,
            ORDHD_DEPOSIT,
            ORDHD_DEPOSIT_STATUS,	
            ORDHD_DEPOSIT_HN,	
            ORDHD_DEPOSIT_NAME,
            ORDHD_DEPOSIT_AUTHEN_BY,
            ORDHD_INTERNAL_REG,
            ORDHD_INTERNAL_DEPOSIT,
            ORDHD_INTERNAL_BILL,
            ORDHD_REFERENCE_FROM,
            ORDHD_REFERENCE,
            ORDHD_STATUS = 'active'
    } = {}) {
        
        return Object.freeze({
            getORDHD_NO: ()=> ORDHD_NO || null,
            getORDHD_BUYERNO: ()=> +ORDHD_BUYERNO || null,
            getORDHD_FORNO: ()=> +ORDHD_FORNO || null,
            getORDHD_DATE: ()=> ORDHD_DATE || null,
            getORDHD_AMT: ()=> +ORDHD_AMT || null,
            getORDHD_PAY_STATUS: ()=> ORDHD_PAY_STATUS || null,
            getORDHD_USE_STATUS: ()=> ORDHD_USE_STATUS || null,
            getORDHD_PAID_NAME: ()=> ORDHD_PAID_NAME || null,
            getORDHD_PAID_BY: ()=> ORDHD_PAID_BY || null,
            getORDHD_PAID_AMOUNT: ()=> +ORDHD_PAID_AMOUNT || null,
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
            getORDHD_PAYMENT_REF: ()=> ORDHD_PAYMENT_REF || null,
            getORDHD_REF1: ()=> ORDHD_REF1 || null,
            getORDHD_REF2: ()=> ORDHD_REF2 || null,
            getORDHD_REMARK: ()=> ORDHD_REMARK || null,
            getORDHD_BUYER_NAME: ()=> ORDHD_BUYER_NAME || null,
            getORDHD_DEPOSIT: ()=> ORDHD_DEPOSIT || null,
            getORDHD_DEPOSIT_STATUS:() => ORDHD_DEPOSIT_STATUS || null,	 
            getORDHD_DEPOSIT_HN:() => ORDHD_DEPOSIT_HN || null,	 
            getORDHD_DEPOSIT_NAME:() => ORDHD_DEPOSIT_NAME || null, 
            getORDHD_DEPOSIT_AUTHEN_BY:() => ORDHD_DEPOSIT_AUTHEN_BY || null,
            getORDHD_INTERNAL_REG: ()=> ORDHD_INTERNAL_REG || null,
            getORDHD_INTERNAL_DEPOSIT: ()=> ORDHD_INTERNAL_DEPOSIT || null,
            getORDHD_INTERNAL_BILL: ()=> ORDHD_INTERNAL_BILL || null,
            getORDHD_REFERENCE_FROM: ()=> ORDHD_REFERENCE_FROM || null,
            getORDHD_REFERENCE: ()=> ORDHD_REFERENCE || null,
            getORDHD_STATUS: ()=> ORDHD_STATUS || null
        })
    }
}

