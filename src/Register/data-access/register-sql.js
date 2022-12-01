module.exports = function buildRegister({Mssql,sql}) {
    const STORED_PROCEDURE_NAME = "dbo.spRegister"
    return Object.freeze({
        insert,
        findExistUser
    });
    async function setRequest({Pool, StatementType, RegisterEntity}){
        const Request = await Pool.request()
        return Request
        .input('StatementType', sql.VarChar(20), StatementType)
        .input('username', sql.VarChar(50), RegisterEntity.getUsername())
        .input('password', sql.VarChar(1000), RegisterEntity.getConfirmPassword())
    }

    
    async function findExistUser({StatementType = "getExistUser", RegisterEntity}){
        const Pool = await Mssql.getConnect();
        const Request = await setRequest({Pool, StatementType, RegisterEntity})
        const result = await Request.execute(`${STORED_PROCEDURE_NAME}`)
        Pool.close()
        return result.recordset[0]
    }

    async function insert({ StatementType = "Insert", RegisterEntity}) {
        const Pool = await Mssql.getConnect();
        const Request = await setRequest({Pool,StatementType,RegisterEntity})
        const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
        Pool.close();
        return result.recordset[0];
      }
}