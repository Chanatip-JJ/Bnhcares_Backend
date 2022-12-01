const path = require('path')
const dotenv = require('dotenv')
dotenv.config({path: path.join(__dirname,'..','..','..','.env')})

module.exports = function makeAddPayment({PaymentAccessDB,makePayment,updateOrder,jwt}){
    return async function addPayment({paymentDetail}){    
        try{
            var paymentResponse = null;
            try{
                paymentResponse = jwt.verify(paymentDetail.payload,process.env.CREDIT_SECRET_KEY_2C2P)
            }catch(e){
                paymentResponse = jwt.verify(paymentDetail.payload,process.env.EWALLET_SECRET_KEY_2C2P)
            }
            
            const PaymentEntity = makePayment(paymentResponse)
            await PaymentAccessDB.insert({PaymentEntity})
            await updateOrder({PaymentEntity})
               
            return PaymentEntity.getorder_id()
        }catch(e){
            throw e
        }  
    }
}