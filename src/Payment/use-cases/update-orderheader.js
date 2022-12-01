module.exports = function makeUpdateOrder({makeOrderHeader,makeGetOrderHeader,OrderHeaderAccessDB}){
    return async function addPayment({PaymentEntity}){               
                var OrderHeaderEntity = makeGetOrderHeader({ORDHD_NO : PaymentEntity.getorder_id()})
                var existingHeader = await OrderHeaderAccessDB.findById({OrderHeaderEntity})
                var OrderHeaderEntity  = makeOrderHeader({...existingHeader[0],
                                                            ORDHD_PAY_STATUS : PaymentEntity.getrespDesc(),
                                                            ORDHD_PAID_AMOUNT : parseInt(PaymentEntity.getamount()),
                                                            ORDHD_PAID_DATE : PaymentEntity.gettransactionDateTime(),
                                                            ORDHD_PAYMENT_REF:PaymentEntity.getreferenceNo(),
                                                            ORDHD_ORDHD_PAID_AUTHENBY:PaymentEntity.getissuerBank()
                                                          })           
                await OrderHeaderAccessDB.update({OrderHeaderEntity})
                return {
                    message:'The Payment has successfully been updated'
                }  
    }
}