module.exports = function buildOrderHeader({Mssql, sql}) { 
    const STORED_PROCEDURE_NAME = "dbo.spPersonal_OrderHeader"
    return Object.freeze({
      findAll,
      findById,
      insert,
      update,
      remove,
      getAllId
    });
    async function setRequest({Pool,StatementType,OrderHeaderEntity}){
      const Request = await Pool.request();
      return Request.input('StatementType', sql.VarChar(20), StatementType)
      .input('ORDHD_NO', sql.Int, OrderHeaderEntity.getORDHD_NO())
      .input('ORDHD_BUYERNO', sql.Int, OrderHeaderEntity.getORDHD_BUYERNO())
      .input('ORDHD_FORNO', sql.Int, OrderHeaderEntity.getORDHD_FORNO())
      .input('ORDHD_DATE', sql.DateTime, OrderHeaderEntity.getORDHD_DATE())
      .input('ORDHD_AMT', sql.Decimal(18, 0), OrderHeaderEntity.getORDHD_AMT())
      .input('ORDHD_PAY_STATUS', sql.VarChar(30), OrderHeaderEntity.getORDHD_PAY_STATUS())
      .input('ORDHD_USE_STATUS', sql.VarChar(30), OrderHeaderEntity.getORDHD_USE_STATUS())
      .input('ORDHD_PAID_NAME', sql.VarChar(300), OrderHeaderEntity.getORDHD_PAID_NAME())
      .input('ORDHD_PAID_BY', sql.VarChar(300), OrderHeaderEntity.getORDHD_PAID_BY())
      .input('ORDHD_PAID_AMOUNT', sql.Decimal(18, 0), OrderHeaderEntity.getORDHD_PAID_AMOUNT())
      .input('ORDHD_PAID_DATE', sql.DateTime, OrderHeaderEntity.getORDHD_PAID_DATE())
      .input('ORDHD_PAID_AUTHENBY', sql.VarChar(200), OrderHeaderEntity.getORDHD_PAID_AUTHENBY())
      .input('ORDHD_HN_BY', sql.VarChar(300), OrderHeaderEntity.getORDHD_HN_BY())
      .input('ORDHD_HN_DATE', sql.DateTime, OrderHeaderEntity.getORDHD_HN_DATE())
      .input('ORDHD_HN_AUTHENBY', sql.VarChar(200), OrderHeaderEntity.getORDHD_HN_AUTHENBY())
      .input('ORDHD_RECEIVE_BY', sql.VarChar(300), OrderHeaderEntity.getORDHD_RECEIVE_BY())
      .input('ORDHD_RECEIVE_DATE', sql.DateTime, OrderHeaderEntity.getORDHD_RECEIVE_DATE())
      .input('ORDHD_RECEIVE_AUTHENBY', sql.VarChar(200), OrderHeaderEntity.getORDHD_RECEIVE_AUTHENBY())
      .input('ORDHD_USE_BY', sql.VarChar(300), OrderHeaderEntity.getORDHD_USE_BY())
      .input('ORDHD_USE_DATE', sql.DateTime, OrderHeaderEntity.getORDHD_USE_DATE())
      .input('ORDHD_USE_AUTHENBY', sql.VarChar(200), OrderHeaderEntity.getORDHD_USE_AUTHENBY())
      .input('ORDHD_REF1', sql.VarChar(200), OrderHeaderEntity.getORDHD_REF1())
      .input('ORDHD_REF2', sql.VarChar(200), OrderHeaderEntity.getORDHD_REF2())
      .input('ORDHD_REMARK', sql.VarChar(4000), OrderHeaderEntity.getORDHD_REMARK())
      .input('ORDHD_BUYER_NAME', sql.VarChar(1000), OrderHeaderEntity.getORDHD_BUYER_NAME())
      .input('ORDHD_DEPOSIT', sql.VarChar(50), OrderHeaderEntity.getORDHD_DEPOSIT())
      .input('ORDHD_INTERNAL_REG', sql.VarChar(100), OrderHeaderEntity.getORDHD_INTERNAL_REG())
      .input('ORDHD_INTERNAL_DEPOSIT', sql.VarChar(100), OrderHeaderEntity.getORDHD_INTERNAL_DEPOSIT())
      .input('ORDHD_INTERNAL_BILL', sql.VarChar(100), OrderHeaderEntity.getORDHD_INTERNAL_BILL())
      .input('ORDHD_REFERENCE_FROM', sql.VarChar(50), OrderHeaderEntity.getORDHD_REFERENCE_FROM())
      .input('ORDHD_UTM_SOURCE', sql.VarChar(100), OrderHeaderEntity.getORDHD_UTM_SOURCE())
      .input('ORDHD_UTM_MEDIUM', sql.VarChar(100), OrderHeaderEntity.getORDHD_UTM_MEDIUM())
      .input('ORDHD_UTM_CAMPAIGN', sql.VarChar(100), OrderHeaderEntity.getORDHD_UTM_CAMPAIGN())
      .input('ORDHD_REFERENCE', sql.VarChar(100), OrderHeaderEntity.getORDHD_REFERENCE())
      .input('ORDHD_STATUS', sql.VarChar(20), OrderHeaderEntity.getORDHD_STATUS())
}
    
    async function findAll({ StatementType = "GetAll",OrderHeaderEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,OrderHeaderEntity})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset;
    }
    async function findById({ StatementType = "GetId",OrderHeaderEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,OrderHeaderEntity})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset[0];
    }        
    
    async function remove({ StatementType = "Delete",OrderHeaderEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,OrderHeaderEntity})
      await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
    }
    
    async function update({ StatementType = "Update",OrderHeaderEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,OrderHeaderEntity})
      await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
    }

    async function insert({ StatementType = "Insert",OrderHeaderEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,OrderHeaderEntity})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset[0];
    }

    async function getAllId({ StatementType = "GetAllId",OrderHeaderEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,OrderHeaderEntity})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset;
    }
    
}
