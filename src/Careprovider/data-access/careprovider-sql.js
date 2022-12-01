module.exports = function buildCareProvider({Mssql, sql}) { 
    const STORED_PROCEDURE_NAME = 'dbo.spCareprovider'
    return Object.freeze({
      findAll,
      findById,
      search,
      update,
    });
    
    async function setRequest({Pool,StatementType,CareProviderEntity}){
      const Request = await Pool.request();
      return Request
      .input('StatementType', sql.VarChar(20), StatementType)
      .input('uid', sql.Int, CareProviderEntity.getuid())
      .input('uid_bconnect', sql.Int, CareProviderEntity.getuid_bconnect())
      .input('uid_trackcare', sql.Int, CareProviderEntity.getuid_trackcare())
      .input('title_th', sql.VarChar(10), CareProviderEntity.gettitle_th())
      .input('firstname_th', sql.VarChar(50), CareProviderEntity.getfirstname_th())
      .input('middlename_th', sql.VarChar(50), CareProviderEntity.getmiddlename_th())
      .input('lastname_th', sql.VarChar(50), CareProviderEntity.getlastname_th())
      .input('title_en', sql.VarChar(50), CareProviderEntity.gettitle_en())
      .input('firstname_en', sql.VarChar(50), CareProviderEntity.getfirstname_en())
      .input('middlename_en', sql.VarChar(50), CareProviderEntity.getmiddlename_en())
      .input('lastname_en', sql.VarChar(50), CareProviderEntity.getlastname_en())
      .input('gender', sql.VarChar(10), CareProviderEntity.getgender())
      .input('description_th', sql.VarChar(2000), CareProviderEntity.getdescription_th())
      .input('description_en', sql.VarChar(2000), CareProviderEntity.getdescription_en())
      .input('specialty_type', sql.VarChar(50), CareProviderEntity.getspecialty_type())
      .input('clinical_type', sql.VarChar(50), CareProviderEntity.getclinical_type())
      .input('status', sql.VarChar(10), CareProviderEntity.getstatus())
      .input('license_no', sql.VarChar(50), CareProviderEntity.getlicense_no())
      .input('native_language', sql.VarChar(50), CareProviderEntity.getnative_language())
      .input('search_value', sql.VarChar(50), CareProviderEntity.getsearch_value())
    }
    
    async function findAll({ StatementType = "GetAll",CareProviderEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,CareProviderEntity})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset;
    }
    async function findById({ StatementType = "GetId",CareProviderEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,CareProviderEntity})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close(); 
      return result.recordset;
    }

    async function search({StatementType = 'Search',CareProviderEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,CareProviderEntity})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close()
      return result.recordset
    }        
    
    async function update({ StatementType = "Update",CareProviderEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,CareProviderEntity})
      await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
    }    
}
