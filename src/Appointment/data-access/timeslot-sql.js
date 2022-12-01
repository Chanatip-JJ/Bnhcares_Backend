module.exports = function buildDatePicker({slot_config, sql}) { 
    const STORED_PROCEDURE_NAME = 'dbo.spDMKT_DOCTOR_TIMESLOT'
    return Object.freeze({
      findAvailableSlot
    });
    
    async function setRequest({Pool,TimeSlotDetail}){
      const Request = await Pool.request();
      return Request
      .input('SelectedDate', sql.Date, TimeSlotDetail.getSelectedDate())
      .input('LocationID', sql.Int, TimeSlotDetail.getLocationId())
      .input('CareProviderID', sql.Int, TimeSlotDetail.getCareproviderId())
    }

    async function findAvailableSlot({TimeSlotDetail} = {}) {
      const Pool = await new sql.ConnectionPool(slot_config).connect()
      const Request = await setRequest({Pool,TimeSlotDetail})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset;
    }
}
