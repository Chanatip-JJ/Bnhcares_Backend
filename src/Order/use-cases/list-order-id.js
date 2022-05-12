module.exports = function makeListOrderID({OrderHeaderAccessDB,OrderDetailAccessDB,makeGetOrderHeader,makeGetOrderDetail}){
    return async function listOrdersId({params} = {}){        
        if(!params){
            throw new Error('You must supply a order id.')
        }
        // params = {order_id:2}
        console.log(params)
        const OrderHeaderEntity = makeGetOrderHeader({
          ORDHD_NO : params.order_id
        })
        const Header = await OrderHeaderAccessDB.findById({OrderHeaderEntity})
        const OrderDetailEntity = makeGetOrderDetail({
          ORDDT_NO : params.order_id
        }) 
        const detail = await OrderDetailAccessDB.findById({OrderDetailEntity})
        const Order = {...Header,detail}
        
        return Order
      }     
    }