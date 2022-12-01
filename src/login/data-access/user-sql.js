module.exports = function buildUser({Mssql, sql}) {
    const STORED_PROCEDURE_NAME = "dbo.spUser"
    return Object.freeze({
        update,
        findById,
        findByHNorUsername
    });
    async function setRequest({Pool, StatementType, UserEntity}){
        const Request = await Pool.request();
        return Request
        .input('StatementType', sql.VarChar(20), StatementType)
        .input('uid',sql.Int, UserEntity.getUID())
        .input('username',sql.VarChar(1000),UserEntity.getUsername())
        .input('password',sql.VarChar(1000), UserEntity.getPassword())
        .input('hn',sql.VarChar(30), UserEntity.getHN())
        .input('patient_uid',sql.Int, UserEntity.getPatientUID())
        .input('line_id',sql.VarChar(100),UserEntity.getLineID())
        .input('pincode',sql.VarChar(6),UserEntity.getPincode())
    }

    async function update({StatementType = "Update", UserEntity}){
        const Pool = await Mssql.getConnect();
        const Request = await setRequest({Pool, StatementType, UserEntity})
        await Request.execute(`${STORED_PROCEDURE_NAME}`)
        Pool.close();
    }

    async function findById({StatementType = "GetId", UserEntity}){
        const Pool = await Mssql.getConnect();
        const Request = await setRequest({Pool, StatementType, UserEntity})
        const result= await Request.execute(`${STORED_PROCEDURE_NAME}`)
        Pool.close();
        return result.recordset
    }


    async function findByHNorUsername({StatementType = "ForgetPassword", UserEntity}){
        const Pool = await Mssql.getConnect();
        const Request = await setRequest({Pool, StatementType, UserEntity})
        const result= await Request.execute(`${STORED_PROCEDURE_NAME}`)
        Pool.close();
        return result.recordset
    }
}