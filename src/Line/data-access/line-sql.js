module.exports = function buildLogin({Mssql, sql}) {
    const STORED_PROCEDURE_NAME = "dbo.spCheckHN"
    return Object.freeze({
        check
    });
    async function setRequest({Pool, LineEntity}){
        const Request = await Pool.request();
        return Request
        .input('Line',sql.VarChar(100), LineEntity.getLineID())
        .input('HN',sql.VarChar(50), LineEntity.getHN())
    }

    async function check({LineEntity}){
        const Pool = await Mssql.getConnect();
        const Request = await setRequest({Pool, LineEntity})
        const result = await Request.execute(`${STORED_PROCEDURE_NAME}`)
        Pool.close();
        return result.recordset;
    }
}