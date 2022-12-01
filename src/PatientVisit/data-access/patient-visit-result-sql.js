module.exports = function buildPatientVisitResult({date_config, sql}) { 
    const STORED_PROCEDURE_NAME = 'dbo.spDMKT_PATIENT_VISIT_RESULT'
    return Object.freeze({
      findResult,
    });
    
    async function setRequest({Pool,PatientVisitResultEntity}){
      const Request = await Pool.request();
      return Request
      .input('result_type', sql.VarChar(30),PatientVisitResultEntity.getResultType())
      .input('patientvisit_id', sql.Int,PatientVisitResultEntity.getPatientVisitUID())
    }
    
    async function findResult({PatientVisitResultEntity} = {}) {
      const Pool = await new sql.ConnectionPool(date_config).connect()
      const Request = await setRequest({Pool,PatientVisitResultEntity})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset;
    }
   
}
