module.exports = function buildDoctorAppointmentManagement({Mssql, sql}) { 
  const STORED_PROCEDURE_NAME = "dbo.spDoctorAppointmentManagement"
    return Object.freeze({
      findByCareproviderAndLocation,
      findByLocation,
      findByCareprovider,
      findByID,
      update,
      insert
    });
    
    async function setRequest({Pool,StatementType,DoctorAppointmentManagementEntity}){
      const Request = await Pool.request();
      return Request
      .input('StatementType', sql.VarChar(200), StatementType)
      .input('uid',sql.Int, DoctorAppointmentManagementEntity.getUID())
      .input('careprovider_uid', sql.Int, DoctorAppointmentManagementEntity.getCareprovider_uid())
      .input('location_uid', sql.Int, DoctorAppointmentManagementEntity.getLocation_uid()) 
      .input('showCareprovider', sql.Bit, DoctorAppointmentManagementEntity.getShowCareprovider())
      .input('showSchedule', sql.Bit, DoctorAppointmentManagementEntity.getShowSchedule())
      .input('current_day_start_trim', sql.Int, DoctorAppointmentManagementEntity.getCurrent_day_start_trim())
      .input('start_time_trim', sql.Int, DoctorAppointmentManagementEntity.getStart_time_trim())
      .input('end_time_trim', sql.Int, DoctorAppointmentManagementEntity.getEnd_time_trim())
      .input('allowAppoint', sql.Bit, DoctorAppointmentManagementEntity.getAllowAppoint())
      .input('isConfirm', sql.Bit, DoctorAppointmentManagementEntity.getIsConfirm())
      .input('isReschedule', sql.Bit, DoctorAppointmentManagementEntity.getIsReschedule())
      .input('isCancel', sql.Bit, DoctorAppointmentManagementEntity.getIsCancel())
      .input('isTeleconsultation', sql.Bit, DoctorAppointmentManagementEntity.getIsTeleConsultation())
      .input('telephone',sql.VarChar(2000),DoctorAppointmentManagementEntity.getTelephone())
      .input('service_description_en', sql.VarChar(3000), DoctorAppointmentManagementEntity.getService_description_en())
      .input('service_description_th', sql.VarChar(3000), DoctorAppointmentManagementEntity.getService_description_th())
      .input('sunday', sql.Bit, DoctorAppointmentManagementEntity.getSunday())
      .input('monday', sql.Bit, DoctorAppointmentManagementEntity.getMonday())
      .input('tuesday', sql.Bit, DoctorAppointmentManagementEntity.getTuesday())
      .input('wednesday', sql.Bit, DoctorAppointmentManagementEntity.getWednesday())
      .input('thursday', sql.Bit, DoctorAppointmentManagementEntity.getThursday())
      .input('friday', sql.Bit, DoctorAppointmentManagementEntity.getFriday())
      .input('saturday', sql.Bit, DoctorAppointmentManagementEntity.getSaturday())
      .input('status', sql.VarChar(10), DoctorAppointmentManagementEntity.getStatus())
    }


    async function findByCareproviderAndLocation({ StatementType = "GetByLocationAndCareprovider",DoctorAppointmentManagementEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,DoctorAppointmentManagementEntity})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset[0];
    }  
    

    async function findByID({ StatementType = "GetByID",DoctorAppointmentManagementEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,DoctorAppointmentManagementEntity})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset;
    }   
    
    async function findByLocation({ StatementType = "GetByLocation",DoctorAppointmentManagementEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,DoctorAppointmentManagementEntity})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset;
    }  
    
    async function findByCareprovider({ StatementType = "GetByCareprovider",DoctorAppointmentManagementEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,DoctorAppointmentManagementEntity})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset;
    }  



    async function update({ StatementType = "Update",DoctorAppointmentManagementEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,DoctorAppointmentManagementEntity})
      await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
    }

    async function insert({ StatementType = "Insert",DoctorAppointmentManagementEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,DoctorAppointmentManagementEntity})
      await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
    }

}
