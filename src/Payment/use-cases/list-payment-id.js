module.exports = function makeListPaymentID({PaymentAccessDB,makeGetPayment}){
    return async function listPaymentsId({params} = {}){        
        if(!params){
            throw new Error('You must supply a payment id.')
        }
        // params = {payment_id:2}
        console.log(params)
        const PaymentEntity = makeGetPayment({
          NO : params.payment_id
        })
        const Payment = await PaymentAccessDB.findById({PaymentEntity})
        
        return Payment
      }     
    }