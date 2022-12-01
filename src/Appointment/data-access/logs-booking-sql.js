module.exports = function buildLogsBooking({Mssql, sql}) { 
    const STORED_PROCEDURE_NAME = 'dbo.BookingLog'
    return Object.freeze({
      insert
    });
    
    async function setRequest({Pool,LogBooking}){
      const Request = await Pool.request();
      return Request
      .input('booking_id', sql.Int,LogBooking.getBookingID())
      .input('patient_id', sql.Int, LogBooking.getPatientUID())
      .input('location_id', sql.Int, LogBooking.getLocationUID())
      .input('careprovider_id', sql.Int,LogBooking.getCareproviderUID())
      .input('slotdefinition_id',sql.Int,LogBooking.getSlotDefinitionUID())
      .input('user_id',sql.Int,LogBooking.getUserId())
      .input('book_status',sql.VarChar(50),LogBooking.getBookStatus())
    }

    async function insert({LogBooking}) {
      const Pool = await await Mssql.getConnect();
      const Request = await setRequest({Pool,LogBooking})
      await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
    }
}
