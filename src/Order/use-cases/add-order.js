module.exports = function makeAddOrder({OrderHeaderAccessDB,
                                        makeOrderDetail,
                                        makeOrderHeader,
                                        OrderDetailAccessDB}){
    return async function addOrder({Order}){
        const {details,...header} = Order
        const OrderHeaderEntity = makeOrderHeader(header)
        const ORDHD_NO = await OrderHeaderAccessDB.insert({OrderHeaderEntity})
        const ORDDT_NO = ORDHD_NO.ORDDT 
        for(var item of details){
            var OrderDetailEntity = makeOrderDetail({ORDDT_NO,...item})
            await OrderDetailAccessDB.insert({OrderDetailEntity})
        }

        return {
            order_id : ORDDT_NO
        }  
    }
}