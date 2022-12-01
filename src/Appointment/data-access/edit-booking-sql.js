module.exports = function buildEditBooking({slot_config, sql}) { 
    const STORED_PROCEDURE_NAME = 'dbo.pUpdatePatientAppointment'
    return Object.freeze({
      update
    });
    
    async function setRequest({Pool,BookingEntity}){
      const Request = await Pool.request();
      return Request
      .input('P_BookingUID', sql.Int, BookingEntity.getBookingUID())
      .input('P_AppointmentDttm', sql.DateTime2, BookingEntity.getAppointmentDttm())
      .input('P_BKSTSUID', sql.Int, BookingEntity.getBKSTSUID())
      .input('P_BookingID', sql.UniqueIdentifier, BookingEntity.getBookingID())
      .input('P_CareproviderUID', sql.Int, BookingEntity.getCareproviderUID())
      .input('P_Comments', sql.NVarChar(sql.MAX), BookingEntity.getComments())
      .input('P_ExpectedArrivalDttm', sql.DateTime2, BookingEntity.getExpectedArrivalDttm())
      .input('P_OutcomeUID', sql.Int, BookingEntity.getOutcomeUID())
      .input('P_OwnerOrganisationUID', sql.Int, BookingEntity.getOwnerOrganisationUID())
      .input('P_PatientUID', sql.BigInt, BookingEntity.getPatientUID())
      .input('P_ServiceUID', sql.Int, BookingEntity.getServiceUID())
      .input('P_LocationUID', sql.Int, BookingEntity.getLocationUID())
      .input('P_SlotDefintionUID', sql.Int, BookingEntity.getSlotDefinitionUID())
      .input('P_SlotEndDttm', sql.DateTime2, BookingEntity.getSlotEndDttm())
      .input('P_SlotStartDttm', sql.DateTime2, BookingEntity.getSlotStartDttm())
      .input('P_TokenNumber', sql.NVarChar(30), BookingEntity.getTokenNumber())
      .input('P_VISTYUID', sql.Int, BookingEntity.getVISTYUID())
      .input('P_CancellationReson', sql.Int, BookingEntity.getCancellationReson())
      .input('P_CUser', sql.Int, BookingEntity.getCUser())
      .input('P_CWhen', sql.DateTime2, BookingEntity.getCWhen())
      .input('P_ReferredByUID', sql.Int, BookingEntity.getReferredByUID())
      .input('P_BookingNumber', sql.NVarChar(50), BookingEntity.getBookingNumber())
      .input('P_BKTYPUID', sql.Int, BookingEntity.getBKTYPUID())
      .input('P_BKMODUID', sql.Int, BookingEntity.getBKMODUID())
      .input('P_AssetUID', sql.Int, BookingEntity.getAssetUID())
      .input('P_BookedServiceUID', sql.Int, BookingEntity.getBookedServiceUID())
      .input('P_RecurrenceUID', sql.Int, BookingEntity.getRecurrenceUID())
    }

    async function update({BookingEntity} = {}) {
      const Pool = await new sql.ConnectionPool(slot_config).connect()
      const Request = await setRequest({Pool,BookingEntity})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset;
    }
}
