module.exports = function makeEditPackage({ OrderHeaderAccessDB,
                                            OrderDetailAccessDB,
                                            makeOrderHeader,
                                            makeGetOrderHeader,
                                            makeOrderDetail,
                                            makeGetOrderDetail}){
    return async function editPackage({edit,params} ={}){
        
        const {detail,...header} = edit

        await updateOrderHeader(header)

        // for(var item of detail){
        //     await updateOrderDetail(item)
        // }

        return {
            message:"Order successfully edited"
        }

        // async function updateOrderDetail(item){    
        //         var OrderDetailEntity = makeGetOrderDetail({ORDDT_NO : params.order_id})
        //         var existingDetail = await OrderDetailAccessDB.findById({OrderDetailEntity})
        //         if(!existingDetail) throw new Error('Order detail not found.')
        //         var OrderDetailEntity  = makeOrderDetail({...existingDetail,...item})
        //         await OrderDetailAccessDB.update({OrderDetailEntity})
        // }

        async function updateOrderHeader(header){
                var OrderHeaderEntity = makeGetOrderHeader({ORDHD_NO : params.order_id})
                var existingHeader = await OrderHeaderAccessDB.findById({OrderHeaderEntity})
                if(!existingHeader) throw new Error('Order not found.')
                var OrderHeaderEntity  = makeOrderHeader({...existingHeader[0],...header})           
                await OrderHeaderAccessDB.update({OrderHeaderEntity})
        }
    }
}