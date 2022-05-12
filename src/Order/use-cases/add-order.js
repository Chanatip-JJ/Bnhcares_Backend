module.exports = function makeAddOrder({OrderHeaderAccessDB,
                                        makeOrderDetail,
                                        makeOrderHeader,
                                        OrderDetailAccessDB}){
    return async function addOrder({Order}){
        const {detail,...header} = Order
        const OrderHeaderEntity = makeOrderHeader(header)
        const ORDHD_NO = await OrderHeaderAccessDB.insert({OrderHeaderEntity})
        const ORDDT_NO = ORDHD_NO.ORDDT 
        for(var item of detail){
            var OrderDetailEntity = makeOrderDetail({ORDDT_NO,...item})
            await OrderDetailAccessDB.insert({OrderDetailEntity})
        }
        return {
            message:'THe Order has successfully been added'
        }  
    }
}