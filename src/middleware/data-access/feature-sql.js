module.exports = function buildFeature({Mssql, sql}) { 
  const STORED_PROCEDURE_NAME = "dbo.spFeature"
    return Object.freeze({
      findUser
    });
    async function setRequest({Pool,StatementType,user_uid}){
      const Request = await Pool.request();
      return Request
      .input('StatementType', sql.VarChar(100), StatementType)
      .input('user_uid', sql.Int, user_uid)
    }
    
    async function findUser({ StatementType = "GetUserFeature",user_uid} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,user_uid})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset[0];
    }
    

   
    
}
