module.exports = function buildSearchPatient({date_config, sql}) { 
    const STORED_PROCEDURE_NAME = 'dbo.spDMKT_SearchPatient'
    return Object.freeze({
      find
    });
    
    async function setRequest({Pool,PatientEntity}){
      const Request = await Pool.request();
      return Request
      .input('HN', sql.NVarChar(30), PatientEntity.getHN())
      .input('FirstName', sql.NVarChar(100), PatientEntity.getFirst_name())
      .input('LastName', sql.NVarChar(100), PatientEntity.getLast_name())
       }
       
    async function find({PatientEntity}) {
        const Pool = await new sql.ConnectionPool(date_config).connect()
        const Request = await setRequest({Pool,PatientEntity})
        const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
        Pool.close();
        return result.recordset;
    }
     
}
