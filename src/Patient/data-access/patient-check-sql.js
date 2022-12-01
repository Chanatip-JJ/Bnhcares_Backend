module.exports = function buildPatient({Mssql, sql}) { 
    const STORED_PROCEDURE_NAME = 'dbo.spCheckPatient'
    return Object.freeze({
      checkByHN,
      GetByHN
    });
    
    async function setRequest({StatementType,Pool,HN}){
      const Request = await Pool.request();
      return Request
      .input('StatementType',sql.VarChar(50),StatementType)
      .input('HN', sql.VarChar(30), HN)
       }
       
    async function checkByHN({StatementType = 'CheckByHN',HN} = {}) {
        const Pool = await Mssql.getConnect()
        const Request = await setRequest({StatementType,Pool,HN})
        const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
        Pool.close();
        return result.recordset[0];
    }

    async function GetByHN({StatementType = 'GetByHN',HN} = {}) {
      const Pool = await Mssql.getConnect()
      const Request = await setRequest({StatementType,Pool,HN})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset[0];
  }
  
}
