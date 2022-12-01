module.exports = function buildPayment({Mssql, sql}) { 
    const STORED_PROCEDURE_NAME = 'dbo.spPersonal_Payment'
    return Object.freeze({
      findAll,
      findById,
      insert,
    });
    
    async function setRequest({Pool,StatementType,PaymentEntity}){
      const Request = await Pool.request();
      return Request
      .input('StatementType', sql.VarChar(20), StatementType)
      .input('payment_no', sql.Int, PaymentEntity.getpayment_no())
      .input('order_id', sql.Int, PaymentEntity.getorder_id())
      .input('cardToken', sql.Int, PaymentEntity.getcardToken())
      .input('loyaltyPoints', sql.Int, PaymentEntity. getloyaltyPoints())
      .input('merchantID', sql.VarChar(100), PaymentEntity.getmerchantID())
      .input('invoiceNo', sql.VarChar(100), PaymentEntity.getinvoiceNo())
      .input('cardNo', sql.VarChar(100), PaymentEntity.getcardNo())
      .input('amount', sql.VarChar(100), PaymentEntity.getamount())
      .input('monthlyPayment', sql.VarChar(100), PaymentEntity.getmonthlyPayment())
      .input('currencyCode', sql.VarChar(100), PaymentEntity.getcurrencyCode())
      .input('recurringUniqueID', sql.VarChar(1000), PaymentEntity.getrecurringUniqueID())
      .input('tranRef', sql.VarChar(100), PaymentEntity.gettranRef())
      .input('referenceNo', sql.VarChar(100), PaymentEntity.gettranRef())
      .input('approvalCode', sql.VarChar(100), PaymentEntity.getapprovalCode())
      .input('eci', sql.VarChar(100), PaymentEntity.geteci())
      .input('transactionDateTime', sql.VarChar(1000), PaymentEntity.gettransactionDateTime())
      .input('agentCode', sql.VarChar(100), PaymentEntity.getagentCode())
      .input('channelCode', sql.VarChar(100), PaymentEntity.getchannelCode())
      .input('issuerCountry', sql.VarChar(100), PaymentEntity.getissuerCountry())
      .input('issuerBank', sql.VarChar(1000), PaymentEntity.getissuerBank())
      .input('cardType', sql.VarChar(1000), PaymentEntity.getcardType())
      .input('idempotencyID', sql.VarChar(1000), PaymentEntity.getidempotencyID())
      .input('paymentScheme', sql.VarChar(100), PaymentEntity.getpaymentScheme())
      .input('respCode', sql.VarChar(100), PaymentEntity.getrespCode())
      .input('respDesc', sql.VarChar(100), PaymentEntity.getrespDesc())
      .input('json_2c2p', sql.VarChar(5000), PaymentEntity.getjson_2c2p())            
    }

    async function findAll({ StatementType = "GetAll",PaymentEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,PaymentEntity})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset;
    }
    async function findById({ StatementType = "GetId",PaymentEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,PaymentEntity})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset;
    }        
    
    // async function update({ StatementType = "Update",PaymentEntity} = {}) {
    //   const Pool = await Mssql.getConnect();
    //   const Request = await setRequest({Pool,StatementType,PaymentEntity})
    //   await Request.execute(`${STORED_PROCEDURE_NAME}`);
    //   Pool.close();
    // }
    
    async function insert({ StatementType = "Insert",PaymentEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,PaymentEntity})
      await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
    }
}  

