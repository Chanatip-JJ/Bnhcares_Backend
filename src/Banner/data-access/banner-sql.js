module.exports = function buildBanner({Mssql, sql}) { 
  const STORED_PROCEDURE_NAME = "dbo.spBanner"
    return Object.freeze({
      findAll
    });
    async function setRequest({Pool,StatementType}){
      const Request = await Pool.request();
      return Request
      .input('StatementType', sql.VarChar(50), StatementType)
    }
    
    async function findAll({StatementType = "GetAll"} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset;
    }
    
}
