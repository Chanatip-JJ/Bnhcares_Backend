module.exports = function makeListPayment({PaymentAccessDB,makeGetPayment}){
    return async function listPayments({query} = {}){
        const PaymentEntity = makeGetPayment(query)
        const Payment =  await PaymentAccessDB.findAll({PaymentEntity})
        
        return Payment
    }
}