const path = require('path')
const dotenv = require('dotenv')
dotenv.config({path: path.join(__dirname,'..','..','..','.env')})


module.exports = function makeHandlePayment({adaptPaymentOrder,jwt,axios}){
    return async function handlePayment({order}){        
        try{
            
            const SECRET_KEY =  order[0].ORDHD_REF1 == 1 ? process.env.CREDIT_SECRET_KEY_2C2P : process.env.EWALLET_SECRET_KEY_2C2P
            const paymentRequest = await adaptPaymentOrder(order)
            const paymentURL = await buildPaymentAPI(paymentRequest,jwt,axios,SECRET_KEY)

            return paymentURL

          }
          catch(e){
             throw e
          }
    }
  }
    
  async function buildPaymentAPI(paymentRequest,jwt,axios,SECRET_KEY){
      try { 
           
            const tokenPayment = jwt.sign(paymentRequest,SECRET_KEY,{algorithm : 'HS256'})

            const options = {
                method: 'POST',
                // url: 'https://pgw.2c2p.com/payment/4.1/PaymentToken',
                url: process.env.PAYMENT_API, //SANDBOX URL
                headers: {Accept: 'text/plain',
                        'Content-Type': 'application/*+json'},
                data : `{payload: '${tokenPayment}'}`
              }
            const apiResponse = await axios.request(options)
            
            const encodedPayload = apiResponse.data.payload
            
            const PaymentURL = jwt.verify(encodedPayload,SECRET_KEY)
            
            if(PaymentURL.respDesc !== 'Success'){
              throw new Error(PaymentURL)
            }
            
            return PaymentURL
         }
        catch(e){
            throw e
        }   
        
    }    
 