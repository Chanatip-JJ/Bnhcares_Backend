module.exports = function makeAddPayment({PaymentAccessDB,makePayment}){
    return async function addPayment({paymentDetail}){
        const PaymentEntity = makePayment(paymentDetail)
        await PaymentAccessDB.insert({PaymentEntity})
        
        return {
            message:'THe Payment has successfully been added'
        }  
    }
}