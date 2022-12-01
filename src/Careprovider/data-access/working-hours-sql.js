module.exports = function buildWorkingHour({date_config, sql}) { 
    const STORED_PROCEDURE_NAME = 'dbo.spDMKT_WORKING_HOURS'
    return Object.freeze({
      findById,
    });
    
    async function setRequest({Pool,CareProviderID,LocationID}){
      const Request = await Pool.request();
      return Request
             .input('careprovider_uid',sql.Int,CareProviderID)
             .input('location_uid',sql.Int,LocationID)
    }
    
    async function findById({CareProviderID,LocationID}) {
      const Pool = await new sql.ConnectionPool(date_config).connect();
      const Request = await setRequest({Pool,CareProviderID,LocationID})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close(); 
      return result.recordset;
    }
}
