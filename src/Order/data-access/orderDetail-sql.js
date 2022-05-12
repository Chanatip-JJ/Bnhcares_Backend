module.exports = function buildOrderDetail({Mssql, sql}) { 
    const STORED_PROCEDURE_NAME = "dbo.spPersonal_OrderDetail"
    return Object.freeze({
      findAll,
      findById,
      insert,
      update,
      remove
    });
    async function setRequest({Pool,StatementType,OrderDetailEntity}){
      const Request = await Pool.request();
      return Request
            .input('StatementType', sql.VarChar(20), StatementType)
            .input('ORDDT_NO', sql.Int, OrderDetailEntity.getORDDT_NO())
            .input('ORDDT_LINENO', sql.Int, OrderDetailEntity.getORDDT_LINENO())
            .input('ORDDT_ITEM_NO', sql.Int, OrderDetailEntity.getORDDT_ITEM_NO())
            .input('ORDDT_NAMETH', sql.VarChar(500), OrderDetailEntity.getORDDT_NAMETH())
            .input('ORDDT_NAMEEN', sql.VarChar(500), OrderDetailEntity.getORDDT_NAMEEN())
            .input('ORDDT_DETAILTH', sql.VarChar(3000), OrderDetailEntity.getORDDT_DETAILTH())
            .input('ORDDT_DETAILEN', sql.VarChar(3000), OrderDetailEntity.getORDDT_DETAILEN())
            .input('ORDDT_REF1', sql.VarChar(50), OrderDetailEntity.getORDDT_REF1())
            .input('ORDDT_REF2', sql.VarBinary(50), OrderDetailEntity.getORDDT_REF2())
            .input('ORDDT_REGULARPRICE', sql.Decimal(18, 0), OrderDetailEntity.getORDDT_REGULARPRICE())
            .input('ORDDT_FINALPRICE', sql.Decimal(18, 0), OrderDetailEntity.getORDDT_FINALPRICE())
            .input('ORDDT_BCONNECTSALECODE', sql.VarChar(50), OrderDetailEntity.getORDDT_BCONNECTSALECODE())
            .input('ORDDT_STATUS', sql.VarChar(30), OrderDetailEntity.getORDDT_STATUS())
            .input('ORDDT_USE_BY', sql.VarChar(200), OrderDetailEntity.getORDDT_USE_BY())
            .input('ORDDT_USE_DATE', sql.DateTime, OrderDetailEntity.getORDDT_USE_DATE())
            .input('ORDDT_USE_AUTHENBY', sql.VarChar(200), OrderDetailEntity.getORDDT_USE_AUTHENBY())
            .input('ORDDT_USE_HN', sql.VarChar(50), OrderDetailEntity.getORDDT_USE_HN())
            .input('ORDDT_BOOK_ID', sql.VarChar(50), OrderDetailEntity.getORDDT_BOOK_ID())
            .input('ORDDT_BOOK_TYPE', sql.VarChar(50), OrderDetailEntity.getORDDT_BOOK_TYPE())     
          }
    
    async function findAll({ StatementType = "GetAll",OrderDetailEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,OrderDetailEntity})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset;
    }
    async function findById({ StatementType = "GetId",OrderDetailEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,OrderDetailEntity})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset;
    }        
    
    async function remove({ StatementType = "Delete",OrderDetailEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,OrderDetailEntity})
      await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
    }
    
    async function update({ StatementType = "Update",OrderDetailEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,OrderDetailEntity})
      await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
    }

    async function insert({ StatementType = "Insert",OrderDetailEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,OrderDetailEntity})
      await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
    }
    
}
