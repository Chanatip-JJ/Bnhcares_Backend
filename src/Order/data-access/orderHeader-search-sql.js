module.exports = function buildSearchOrderHeader({Mssql, sql}) { 
    const STORED_PROCEDURE_NAME = "dbo.spSearchOrderHeader"
    return Object.freeze({
      find,
    });
    async function setRequest({Pool,OrderHeaderEntity}){
      const Request = await Pool.request();
      return Request.input('OrderID', sql.VarChar(20),OrderHeaderEntity.getORDER_ID())
      .input('HN', sql.Int,OrderHeaderEntity.getHN())
      .input('FirstName', sql.NVarChar(100),OrderHeaderEntity.getFirst_Name())
      .input('LastName', sql.NVarChar(100),OrderHeaderEntity.getLast_Name())
      .input('Day', sql.Int,OrderHeaderEntity.getDay())
      .input('StartDate', sql.Date,OrderHeaderEntity.getStart_Date())
      .input('EndDate', sql.Date,OrderHeaderEntity.getEnd_Date())
}
    
    async function find({OrderHeaderEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,OrderHeaderEntity})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset;
    }
    
    
}
