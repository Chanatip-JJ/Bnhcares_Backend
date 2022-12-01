module.exports = function buildLogin({Mssql, sql}) {
    const STORED_PROCEDURE_NAME = "dbo.spOTP"
    return Object.freeze({
        upsertByTelephone,
        findByTelephone,
        upsertByEmail,
        findByEmail,
    });
    async function setRequest({Pool, StatementType, OTPEntity}){
        const Request = await Pool.request();
        return Request
        .input('StatementType', sql.VarChar(20), StatementType)
        .input('Email',sql.VarChar(200),OTPEntity.getEmail())
        .input('Telephone',sql.VarChar(50), OTPEntity.getTelephone())
        .input('OTP',sql.VarChar(50), OTPEntity.getOTP())
    }

    async function upsertByTelephone({StatementType = "UpsertByTelephone", OTPEntity}){
        const Pool = await Mssql.getConnect();
        const Request = await setRequest({Pool, StatementType, OTPEntity})
        await Request.execute(`${STORED_PROCEDURE_NAME}`)
        Pool.close();
        return ;
    }
    async function findByTelephone({StatementType = "GetOTPbyTelephone", OTPEntity}){
        const Pool = await Mssql.getConnect();
        const Request = await setRequest({Pool, StatementType, OTPEntity})
        const result = await Request.execute(`${STORED_PROCEDURE_NAME}`)
        Pool.close();
        return result.recordset[0];
    }

    async function upsertByEmail({StatementType = "UpsertByEmail", OTPEntity}){
        const Pool = await Mssql.getConnect();
        const Request = await setRequest({Pool, StatementType, OTPEntity})
        await Request.execute(`${STORED_PROCEDURE_NAME}`)
        Pool.close();
        return ;
    }
    async function findByEmail({StatementType = "GetOTPbyEmail", OTPEntity}){
        const Pool = await Mssql.getConnect();
        const Request = await setRequest({Pool, StatementType, OTPEntity})
        const result = await Request.execute(`${STORED_PROCEDURE_NAME}`)
        Pool.close();
        return result.recordset[0];
    }
}