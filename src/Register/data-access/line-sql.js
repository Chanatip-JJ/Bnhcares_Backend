module.exports = function buildRegister({Mssql,sql}) {
    const STORED_PROCEDURE_NAME = "dbo.spCheckHNinLine"
    return Object.freeze({
        find
    });
    async function setRequest({Pool,params}){
        const Request = await Pool.request()
        return Request
        .input('Channel', sql.VarChar(30), params.Channel)
        .input('HN', sql.VarChar(30), params.HN)
    }

    async function find({params}){
        const Pool = await Mssql.getConnect();
        const Request = await setRequest({Pool,params})
        const result = await Request.execute(`${STORED_PROCEDURE_NAME}`)
        Pool.close()
        return result.recordset[0]
    }
}