module.exports = function buildLogin({Mssql, sql}) {
    const STORED_PROCEDURE_NAME = "dbo.spLogin"
    return Object.freeze({
        findUser
    });
    async function setRequest({Pool, StatementType, LoginEntity}){
        const Request = await Pool.request();
        return Request
        .input('StatementType', sql.VarChar(20), StatementType)
        .input('username',sql.VarChar(50), LoginEntity.getUsername())
        .input('password',sql.VarChar(1000), LoginEntity.getPassword())
    }

    async function findUser({StatementType = "getUser", LoginEntity}){
        const Pool = await Mssql.getConnect();
        const Request = await setRequest({Pool, StatementType, LoginEntity})
        const result = await Request.execute(`${STORED_PROCEDURE_NAME}`)
        Pool.close();
        return result.recordset[0];
    }
}