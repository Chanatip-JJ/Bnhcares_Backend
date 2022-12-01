module.exports = function makePayOrder({  OrderHeaderAccessDB,
                                          makeGetOrderHeader,
                                          makeGetOrderDetail,
                                          handlePayment}){

    return async function payOrder({params} = {}){ 
      try {
              if(!params){
                  throw new Error('You must supply a order id.')
              }

              const OrderHeaderEntity = makeGetOrderHeader({
                ORDHD_NO : params.order_id
              })

              const order = await OrderHeaderAccessDB.findById({OrderHeaderEntity})

             
              if(!order){
                throw new RangeError('Order not found')
              }

              const PaymentURL = await handlePayment({order})
              
              const PaymentResponse = {order_id : params.order_id,...PaymentURL} 
              
              return  PaymentResponse
                
            }catch(e){
                throw e
            }        
         }       
       }