module.exports = function buildPayment({Mssql, sql}) { 
    const STORED_PROCEDURE_NAME = 'dbo.spPersonal_Payment'
    return Object.freeze({
      findAll,
      findById,
      insert,
      update,
    });
    
    async function setRequest({Pool,StatementType,PaymentEntity}){
      const Request = await Pool.request();
      return Request
            .input('StatementType', sql.VarChar(20), StatementType)
            .input('NO', sql.Int, PaymentEntity.getNO())
            .input('ORDER_ID', sql.Int, PaymentEntity.getORDER_ID())
            .input('SYSTEM', sql.VarChar(50), PaymentEntity.getSYSTEM())
            .input('REF_CODE', sql.VarChar(50), PaymentEntity.getREF_CODE())
            .input('AMOUNT', sql.VarChar(50), PaymentEntity.getAMOUNT())
            .input('PAID_AGENT', sql.VarChar(50), PaymentEntity.getPAID_AGENT())
            .input('MASKED_PAN', sql.VarChar(50), PaymentEntity.getMASKED_PAN())
            .input('APPROVAL_CODE', sql.VarChar(50), PaymentEntity.getAPPROVAL_CODE())
            .input('TRANSACTION_REF', sql.VarChar(50), PaymentEntity.getTRANSACTION_REF())
            .input('PROCESS_BY', sql.VarChar(50), PaymentEntity.getPROCESS_BY())
            .input('CHANNEL_RESPONE', sql.VarChar(50), PaymentEntity.getCHANNEL_RESPONE())
            .input('PAYMENT_STATUS', sql.VarChar(50), PaymentEntity.getPAYMENT_STATUS())
            .input('JSON_2C2P', sql.VarChar(2000), PaymentEntity.getJSON_2C2P())
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
    
    async function update({ StatementType = "Update",PaymentEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,PaymentEntity})
      await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
    }
    
    async function insert({ StatementType = "Insert",PaymentEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,PaymentEntity})
      await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
    }
}  

