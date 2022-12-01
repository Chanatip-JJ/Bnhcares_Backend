module.exports = function buildGetNewBooking({date_config, sql}) { 
    const STORED_PROCEDURE_NAME = 'dbo.spDMKT_SearchParentBookingUID'
    return Object.freeze({
      findByParentID
    });
    
    async function setRequest({Pool,parentID}){
      const Request = await Pool.request();
      return Request
      .input('parentID', sql.Int, parentID)
    }

    async function findByParentID({parentID} = {}) {
      const Pool = await new sql.ConnectionPool(date_config).connect()
      const Request = await setRequest({Pool,parentID})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset[0];
    }
}
