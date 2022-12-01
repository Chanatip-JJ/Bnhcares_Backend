module.exports = function makeListOrderDetails({OrderDetailAccessDB,
                                                makeGetOrderDetail}){
    return async function listOrderDetails({query} = {}){
              const OrderDetailEntity = makeGetOrderDetail(query)
              const Detail = await OrderDetailAccessDB.findAll({OrderDetailEntity})
              return Detail
       }
}