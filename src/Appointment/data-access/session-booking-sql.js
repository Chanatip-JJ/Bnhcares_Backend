module.exports = function buildSessionBooking({date_config, sql}) { 
    const STORED_PROCEDURE_NAME = 'dbo.spDMKT_SESSION_DETAIL'
    return Object.freeze({
      find
    });
    
    async function setRequest({Pool,SessionID}){
      const Request = await Pool.request();
      return Request
      .input('SessionUID', sql.Int, SessionID)
    }

    async function find(SessionID) {
      const Pool = await new sql.ConnectionPool(date_config).connect()
      const Request = await setRequest({Pool,SessionID})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset;
    }
}
