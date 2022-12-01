module.exports = function buildSpeciality({Mssql, sql}) { 
    const STORED_PROCEDURE_NAME = 'dbo.spSpeciality'
    return Object.freeze({
      findAll,
      findById,
      search
    });
    
    async function setRequest({Pool,StatementType,SpecialityEntity}){
      const Request = await Pool.request();
      return Request
      .input('StatementType', sql.VarChar(20), StatementType)
      .input('uid', sql.Int, SpecialityEntity.getuid())
      .input('uid_bconnect', sql.Int, SpecialityEntity.getuid_bconnect())
      .input('uid_trakcare', sql.Int, SpecialityEntity.getuid_trakcare())
      .input('name', sql.VarChar(200), SpecialityEntity.getname())
      .input('enable_status', sql.VarChar(20), SpecialityEntity.getenable_status())
      .input('description', sql.VarChar(200), SpecialityEntity.getdescription())
      .input('status', sql.VarChar(10), SpecialityEntity.getstatus())
      .input('search_value', sql.VarChar(50), SpecialityEntity.getsearch_value())
    }

    async function search({StatementType = 'Search',SpecialityEntity} = {}) {
      const Pool = await Mssql.getConnect()
      const Request = await setRequest({Pool, StatementType, SpecialityEntity})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`)
      return result.recordset
    }
    
    async function findAll({ StatementType = "GetAll",SpecialityEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,SpecialityEntity})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset;
    }
    async function findById({ StatementType = "GetId",SpecialityEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,SpecialityEntity})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close(); 
      return result.recordset;
    }        
     
}
