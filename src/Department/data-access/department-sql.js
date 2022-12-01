module.exports = function buildDepartment({Mssql, sql}) { 
    const STORED_PROCEDURE_NAME = 'dbo.spDepartment'
    return Object.freeze({
      findAll,
      findById,
      update,
    });
    
    async function setRequest({Pool,StatementType,DepartmentEntity}){
      const Request = await Pool.request();
      return Request
      .input('StatementType', sql.VarChar(20),StatementType)
      .input('uid', sql.Int, DepartmentEntity.getuid())
      .input('uid_bconnect', sql.Int, DepartmentEntity.getuid_bconnect())
      .input('uid_trakcare', sql.Int, DepartmentEntity.getuid_trakcare())
      .input('thai_name', sql.VarChar(50), DepartmentEntity.getthai_name())
      .input('english_name', sql.VarChar(50), DepartmentEntity.getenglish_name())
      .input('floor', sql.VarChar(50), DepartmentEntity.getfloor())
      .input('zone', sql.VarChar(50), DepartmentEntity.getzone())
      .input('phone_no', sql.VarChar(20), DepartmentEntity.getphone_no())
      .input('monday_starttime', sql.Time(7), DepartmentEntity.getmonday_starttime())
      .input('monday_endtime', sql.Time(7), DepartmentEntity.getmonday_endtime())
      .input('tuesday_starttime', sql.Time(7), DepartmentEntity.gettuesday_starttime())
      .input('tuesday_endtime', sql.Time(7), DepartmentEntity.gettuesday_endtime())
      .input('wednesday_starttime', sql.Time(7), DepartmentEntity.getwednesday_starttime())
      .input('wednesday_endtime', sql.Time(7), DepartmentEntity.getwednesday_endtime())
      .input('thursday_starttime', sql.Time(7), DepartmentEntity.getthursday_starttime())
      .input('thursday_endtime', sql.Time(7), DepartmentEntity.getthursday_endtime())
      .input('friday_starttime', sql.Time(7), DepartmentEntity.getfriday_starttime())
      .input('friday_endtime', sql.Time(7), DepartmentEntity.getfriday_endtime())
      .input('sathurday_starttime', sql.Time(7), DepartmentEntity.getsathurday_starttime())
      .input('sathurday_endtime', sql.Time(7), DepartmentEntity.getsathurday_endtime())
      .input('sunday_starttime', sql.Time(7), DepartmentEntity.getsunday_starttime())
      .input('sunday_endtime', sql.Time(7), DepartmentEntity.getsunday_endtime())
      .input('email', sql.VarChar(50), DepartmentEntity.getemail())
      .input('sap_cost_code', sql.VarChar(10), DepartmentEntity.getsap_cost_code())
      .input('description_th', sql.VarChar(2000), DepartmentEntity.getdescription_th())
      .input('description_en', sql.VarChar(2000), DepartmentEntity.getdescription_en())
      .input('img', sql.Image, DepartmentEntity.getimg())
      .input('status', sql.VarChar(10), DepartmentEntity.getstatus())      
    }
    
    async function findAll({ StatementType = "GetAll",DepartmentEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,DepartmentEntity})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset;
    }
    async function findById({ StatementType = "GetId",DepartmentEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,DepartmentEntity})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close(); 
      return result.recordset;
    }        
    
    async function update({ StatementType = "Update",DepartmentEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,DepartmentEntity})
      await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
    }    
}
