module.exports = function buildPerson({Mssql, sql}) { 
    const STORED_PROCEDURE_NAME = 'dbo.spPersonal_Person'
    return Object.freeze({
      findAll,
      findById,
      insert,
      update,
    });
    
    async function setRequest({Pool,StatementType,PersonEntity}){
      const Request = await Pool.request();
      return Request
      .input('StatementType', sql.VarChar(20), StatementType)
      .input('PERSON_NO', sql.Int, PersonEntity.getPERSON_NO())
      .input('PERSON_TYPE', sql.VarChar(50), PersonEntity.getPERSON_TYPE())
      .input('PERSON_HN', sql.VarChar(20), PersonEntity.getPERSON_HN())
      .input('PERSON_LINEID', sql.VarChar(200), PersonEntity.getPERSON_LINEID())
      .input('PERSON_NAME', sql.VarChar(200), PersonEntity.getPERSON_NAME())
      .input('PERSON_LNAME', sql.VarChar(200), PersonEntity.getPERSON_LNAME())
      .input('PERSON_DOB', sql.VarChar(30), PersonEntity.getPERSON_DOB())
      .input('PERSON_GENDER', sql.VarChar(30), PersonEntity.getPERSON_GENDER())
      .input('PERSON_EMAIL', sql.VarChar(100), PersonEntity.getPERSON_EMAIL())
      .input('PERSON_MOBILE', sql.VarChar(100), PersonEntity.getPERSON_MOBILE())
      .input('PERSON_LINK_NO', sql.Int, PersonEntity.getPERSON_LINK_NO())
      .input('PERSON_LINK_TYPE', sql.VarChar(50), PersonEntity.getPERSON_LINK_TYPE())
      .input('PERSON_STATUS', sql.VarChar(50), PersonEntity.getPERSON_STATUS())
      .input('PERSON_REMARK', sql.VarChar(100), PersonEntity.getPERSON_REMARK())
      .input('PERSON_PASSWORD', sql.VarChar(100), PersonEntity.getPERSON_PASSWORD())
      .input('PERSON_REG_SENT', sql.Int, PersonEntity.getPERSON_REG_SENT())
    }
    
    async function findAll({ StatementType = "GetAll",PersonEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,PersonEntity})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset;
    }
    async function findById({ StatementType = "GetId",PersonEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,PersonEntity})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset;
    }        
    
    async function update({ StatementType = "Update",PersonEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,PersonEntity})
      await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
    }
    
    async function insert({ StatementType = "Insert",PersonEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,PersonEntity})
      await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
    }
    
}
