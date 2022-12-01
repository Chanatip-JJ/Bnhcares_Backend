module.exports = function makeListPaymentID({PaymentAccessDB,makeGetPayment}){
    return async function listPaymentsId({params} = {}){        
        if(!params){
            throw new Error('You must supply a payment id.')
        }
  
        const PaymentEntity = makeGetPayment({
          payment_no : params.payment_id
        })
        const Payment = await PaymentAccessDB.findById({PaymentEntity})
        
        return Payment
      }     
    }