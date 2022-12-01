module.exports = function buildPatientVisit({date_config, sql}) { 
    const STORED_PROCEDURE_NAME = 'dbo.spDMKT_PATIENT_VISIT'
    return Object.freeze({
      findAll
    });
    
    async function setRequest({Pool,PatientVisitEntity}){
      const Request = await Pool.request();
      return Request
      .input('patient_ID', sql.Int, PatientVisitEntity.getPatientUID())
      .input('page', sql.Int, PatientVisitEntity.getPage())
      .input('limit', sql.Int, PatientVisitEntity.getLimit())      
    }
    
    async function findAll({PatientVisitEntity} = {}) {
      const Pool = await new sql.ConnectionPool(date_config).connect()
      const Request = await setRequest({Pool,PatientVisitEntity})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset;
    }
}
