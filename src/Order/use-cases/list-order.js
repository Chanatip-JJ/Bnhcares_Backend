module.exports = function makeListOrder({OrderHeaderSearchDB,makeSearchOrderHeader}){
    return async function listOrders({query} = {}){
                 //console.log(query)
                 const OrderHeaderEntity =  makeSearchOrderHeader(query) 
                 const Orders =  OrderHeaderSearchDB.find({OrderHeaderEntity})
                 return Orders
              
       }
}