module.exports = function buildPackage({Mssql, sql}) { 
  const STORED_PROCEDURE_NAME = "spPackageCareProvider"
    return Object.freeze({
      findAll,
      findById,
      insert,
      update,
      remove
    });
    async function setRequest({Pool,StatementType,Entity}){
      const Request = await Pool.request();
      return Request
      .input('StatementType', sql.VarChar(20), StatementType)
      .input('uid',sql.Int,Entity.getUID())
      .input('package_uid',sql.Int,Entity.getPackageUID())
      .input('careprovider_uid',sql.Int,Entity.getCareproviderUID())
      .input('location_uid',sql.Int,Entity.getLocationUID())
      
    }
    
    async function findAll({ StatementType = "GetAll",Entity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,Entity})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset;
    }
    async function findById({ StatementType = "GetPackageId",Entity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,Entity})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset;
    }        
    
    async function remove({ StatementType = "Delete",Entity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,Entity})
      await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
    }
    
    async function update({ StatementType = "Update",Entity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,Entity})
      await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
    }

    async function insert({ StatementType = "Insert",Entity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,Entity})
      await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
    }
    
}
