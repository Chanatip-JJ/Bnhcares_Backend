module.exports = function buildDatePicker({date_config, sql}) { 
    const STORED_PROCEDURE_NAME = 'dbo.spDMKT_DOCTOR_CALENDAR'
    return Object.freeze({
      findAvailableDate
    });
    
    async function setRequest({Pool,AppointmentDetail}){
      const Request = await Pool.request();
      return Request
      .input('StartDate', sql.Date, AppointmentDetail.getStart_Date())
      .input('EndDate', sql.Date, AppointmentDetail.getEnd_Date())
      .input('LocationID', sql.Int, AppointmentDetail.getLocationId())
      .input('CareProviderID', sql.Int, AppointmentDetail.getCareproviderId())
    }

    async function findAvailableDate({AppointmentDetail} = {}) {
      const Pool = await new sql.ConnectionPool(date_config).connect()
      const Request = await setRequest({Pool,AppointmentDetail})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset;
    }
}
