//* swagger documentation --> Payment  as below
/**
 * @swagger
 * components:
 *   schemas:
 *     Payment:
 *       type: object
 *       properties:
 *          cardToken:
 *            type: string
 *          loyaltyPoints:
 *            type: string        
 *          merchantID:
 *            type: string   
 *          invoiceNo:
 *            type: string  
 *          cardNo:
 *            type: string 
 *          amount:
 *            type: string
 *          monthlyPayment:
 *            type: string     
 *          recurringUniqueID:
 *            type: string
 *          currencyCode:
 *            type: string       
 *          tranRef:
 *            type: string
 *          referenceNo:
 *            type: string 
 *          approvalCode:
 *            type: string   
 *          eci:
 *            type: string   
 *          transactionDateTime:
 *            type: string
 *          agentCode:
 *            type: string
 *          channelCode:
 *            type: string
 *          issuerCountry:
 *            type: string
 *          issuerBank:
 *            type: string
 *          cardType:
 *            type: string
 *          idempotencyID:
 *            type: string
 *          paymentScheme:
 *            type: string       
 *          respCode:
 *            type: string     
 *          respDesc:
 *            type: string
 */
module.exports = function buildPayment({}) {
    return function makePayment({
        cardToken,
        loyaltyPoints,
        merchantID,
        invoiceNo,
        cardNo,
        amount,
        monthlyPayment,
        currencyCode,
        recurringUniqueID,
        tranRef,
        referenceNo,
        approvalCode,
        eci,
        transactionDateTime,
        agentCode,
        channelCode,
        issuerCountry,
        issuerBank,
        cardType,
        idempotencyID,
        paymentScheme,
        respCode,
        respDesc
    } = {}) {
        const ORDER_ID = getOrderId(invoiceNo)
        const json_2c2p = JSON.stringify({
                                        ORDER_ID,
                                        cardToken,
                                        loyaltyPoints,
                                        merchantID,
                                        invoiceNo,
                                        cardNo,
                                        amount,
                                        monthlyPayment,
                                        currencyCode,
                                        recurringUniqueID,
                                        tranRef,
                                        referenceNo,
                                        approvalCode,
                                        eci,
                                        transactionDateTime,
                                        agentCode,
                                        channelCode,
                                        issuerCountry,
                                        issuerBank,
                                        cardType,
                                        idempotencyID,
                                        paymentScheme,
                                        respCode,
                                        respDesc
                                        })
        return Object.freeze({
            getpayment_no: () =>  null,
            getorder_id: () =>  +ORDER_ID || null,
            getcardToken: () =>  cardToken || null,
            getloyaltyPoints: () =>  loyaltyPoints || null,
            getmerchantID: () =>  merchantID || null,
            getinvoiceNo: () =>  invoiceNo || null,
            getcardNo: () =>  cardNo || null,
            getamount: () =>  amount || null,
            getmonthlyPayment: () =>  monthlyPayment || null,
            getcurrencyCode: () =>  currencyCode || null,
            getrecurringUniqueID: () =>  recurringUniqueID || null,
            gettranRef: () =>  tranRef || null,
            getreferenceNo: () =>  referenceNo || null,
            getapprovalCode: () =>  approvalCode || null,
            geteci: () =>  eci || null,
            gettransactionDateTime: () =>  transactionDateTime || null,
            getagentCode: () =>  agentCode || null,
            getchannelCode: () =>  channelCode || null,
            getissuerCountry: () =>  issuerCountry || null,
            getissuerBank: () =>  issuerBank || null,
            getcardType: () =>  cardType || null,
            getidempotencyID: () =>  idempotencyID || null,
            getpaymentScheme: () =>  paymentScheme || null,
            getrespCode: () =>  respCode || null,
            getrespDesc: () =>  respDesc || null,
            getjson_2c2p: () =>  json_2c2p || null,
        })
    }
}

function getOrderId(invoiceNo){
    const textOrderID = invoiceNo.substring(12,20)
    const orderID = parseInt(textOrderID)
    return orderID
}





