module.exports = function buildGetBookingID({date_config, sql}) { 
    const STORED_PROCEDURE_NAME = 'dbo.spDMKT_BOOKING_ID'
    return Object.freeze({
      findByBookingUID
    });
    
    async function setRequest({Pool,BookingUID}){
      const Request = await Pool.request();
      return Request
      .input('BookingUID',sql.Int,BookingUID)
    }

    async function findByBookingUID({BookingUID} = {}) {
      const Pool = await new sql.ConnectionPool(date_config).connect()
      const Request = await setRequest({Pool,BookingUID})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset;
    }
}
