module.exports = function buildLocation({date_config, sql}) { 
    const STORED_PROCEDURE_NAME = 'dbo.spDMKT_DOCTOR_LOCATION'
    return Object.freeze({
      findById,
    });
    
    async function setRequest({Pool,CareProviderID}){
      const Request = await Pool.request();
      return Request.input('CareProviderID',sql.Int,CareProviderID)
    }
    
    async function findById({CareProviderID}={}) {
      const Pool = await new sql.ConnectionPool(date_config).connect();
      const Request = await setRequest({Pool,CareProviderID})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close(); 
      return result.recordset;
    }
}
