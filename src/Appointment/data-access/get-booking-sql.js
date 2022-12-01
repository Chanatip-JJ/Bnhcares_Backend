module.exports = function buildGetBooking({date_config, sql}) { 
    const STORED_PROCEDURE_NAME = 'dbo.spDMKT_EXISTED_BOOKING_DETAIL'
    return Object.freeze({
      findByPatientID
    });
    
    async function setRequest({Pool,BookingDetail}){
      const Request = await Pool.request();
      return Request
      .input('patientID', sql.Int, BookingDetail.getPatientID())
      .input('book_status', sql.VarChar(50), BookingDetail.getBookStatus())
    }

    async function findByPatientID({BookingDetail} = {}) {
      const Pool = await new sql.ConnectionPool(date_config).connect()
      const Request = await setRequest({Pool,BookingDetail})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset;
    }
}
