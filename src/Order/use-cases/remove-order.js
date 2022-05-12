module.exports = function makeRemoveOrder({OrderHeaderAccessDB,
                                           makeGetOrderHeader,
                                           makeOrderHeader}){
    return async function removeOrder({params} = {}){
        if(!params){
            throw new Error('You must supply a order id.')
        }
        console.log(params)
        var OrderHeaderEntity = makeGetOrderHeader({ 
            ORDHD_NO: params.order_id 
        })

        const orderToDelete = await OrderHeaderAccessDB.findById({OrderHeaderEntity})
        console.log(orderToDelete)
        if(!orderToDelete || orderToDelete === undefined) {
            return {
                isSuccess: false,
                message:'Order not found, nothing to delete'
            }
        }

        if(alreadyDeleted(orderToDelete)){
            return {
                isSuccess: false,
                message:'This order already was deleted'
            }
        }

        // set status as inactive
        var OrderHeaderEntity = makeGetOrderHeader({ 
            ORDHD_NO: params.order_id,
            ORDHD_STATUS:'inactive' 
        })

        // change status
        await OrderHeaderAccessDB.remove({ OrderHeaderEntity })

        return {
            isSuccess: true,
            message:'The order successfully deleted'
        }
    }
        //whether requested order was already deleted . 
        function alreadyDeleted(orderToDelete){
            if(orderToDelete.ORDHD_STATUS == 'inactive'){
                return true;
            }
            return false;
        }


}