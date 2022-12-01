module.exports = function buildNewPatient({Mssql, sql}) {
    const STORED_PROCEDURE_NAME = "dbo.spNewPatient"
    return Object.freeze({
        find
    });
    async function setRequest({Pool,id}){
        const Request = await Pool.request();
        
        return Request.input('uid', sql.Int, id)
    }

    async function find({id}){
        const Pool = await Mssql.getConnect();
        const Request = await setRequest({Pool,id})
        const result = await Request.execute(`${STORED_PROCEDURE_NAME}`)
        Pool.close();
        return result.recordset[0]
        
    }
}