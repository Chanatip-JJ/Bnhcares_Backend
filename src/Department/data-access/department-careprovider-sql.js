module.exports = function buildDepartment({Mssql, sql}) { 
    const STORED_PROCEDURE_NAME = 'dbo.spDepartmentCareprovider'
    return Object.freeze({
      findCareProvider,
    });
    
    async function setRequest({Pool,LocationID}){
      const Request = await Pool.request();
      return Request
      .input('LocationID', sql.Int,LocationID)
      
    }
    
    async function findCareProvider({LocationID} = {}) {
      const Pool = await Mssql.getConnect()
      const Request = await setRequest({Pool,LocationID})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset;
    }
   
}
