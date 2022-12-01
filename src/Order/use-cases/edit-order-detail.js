module.exports = function makeEditOrderDetail({ OrderDetailAccessDB,
                                                makeOrderDetail,
                                                makeGetOrderDetail}){
    return async function editOrderDetail({edit,params} ={}){
        var OrderDetailEntity = makeGetOrderDetail({
                                ORDDT_NO:params.ORDDT_NO,
                                ORDDT_LINENO:params.ORDDT_LINENO
                            })
        const Detail = await OrderDetailAccessDB.findById({OrderDetailEntity})
                            
        const updated  = {...Detail[0],...edit}                    

        var OrderDetailEntity = makeGetOrderDetail(updated)

        const edited = await OrderDetailAccessDB.update({OrderDetailEntity})
        return  edited
    }
}