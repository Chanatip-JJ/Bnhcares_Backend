module.exports = function buildAdditionalCareprovider({Mssql, sql}) { 
  const STORED_PROCEDURE_NAME = "dbo.spAdditionalCareprovider"
    return Object.freeze({
      findByID,
      update,
      insert
    });
    
    async function setRequest({Pool,StatementType,AdditionalCareproviderEntity}){
      const Request = await Pool.request();
      
      return Request
      .input('StatementType', sql.VarChar(200), StatementType)
      .input('uid',sql.Int, AdditionalCareproviderEntity.getUID())
      .input('careprovider_uid',sql.Int, AdditionalCareproviderEntity.getCareprovider_uid())
      .input('isFullTime',sql.Bit,AdditionalCareproviderEntity.getIsFullTime())
      .input('graduate_institution', sql.VarChar(500), AdditionalCareproviderEntity.getGraduationInstitution()) 
      .input('speciality', sql.VarChar(2000), AdditionalCareproviderEntity.getSpeciality()) 
      .input('graduation_year', sql.VarChar(4), AdditionalCareproviderEntity.getGraduationYear())
      .input('academic_prefix', sql.VarChar(50), AdditionalCareproviderEntity.getAcademicPrefix())
      .input('clinical_interest', sql.VarChar(5000), AdditionalCareproviderEntity.getClinicalInterest())
      .input('image',sql.VarChar(3000),AdditionalCareproviderEntity.getImage())
      .input('language', sql.VarChar(50), AdditionalCareproviderEntity.getLanguage())
    }

    async function findByID({ StatementType = "GetByID",AdditionalCareproviderEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,AdditionalCareproviderEntity})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset;
    }   
    
    async function update({ StatementType = "Update",AdditionalCareproviderEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,AdditionalCareproviderEntity})
      await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
    }

    async function insert({ StatementType = "Insert",AdditionalCareproviderEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,AdditionalCareproviderEntity})
      await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
    }

}
