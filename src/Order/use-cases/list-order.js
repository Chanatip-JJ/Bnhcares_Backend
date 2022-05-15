module.exports = function makeListOrder({OrderHeaderAccessDB,
                                        OrderDetailAccessDB,
                                        makeGetOrderHeader,
                                        makeGetOrderDetail}){
    return async function listOrders({query} = {}){
              var Orders = []
              const OrderHeaderEntity = makeGetOrderHeader({})
              const AllOrderHeaderID = await OrderHeaderAccessDB.findAll({OrderHeaderEntity})
              for(var item of AllOrderHeaderID){
                     await GetDetail(item) 
              }
              
              return Orders

              async function GetDetail(item){
                  var ORDDT = item.ORDHD_NO
                  var OrderDetailEntity = makeGetOrderDetail({ORDDT_NO: ORDDT})
                  var OrderDetail = await OrderDetailAccessDB.findById({OrderDetailEntity})
                  var Order = {...item, details:OrderDetail}
                  Orders.push(Order)
              }
       }
}