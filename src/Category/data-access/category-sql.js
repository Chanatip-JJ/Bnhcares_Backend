module.exports = function buildCategory({Mssql, sql}) { 
  const STORED_PROCEDURE_NAME = "dbo.spCategory"
    return Object.freeze({
      findAll,
      findById,
      insert,
      update,
      remove,
      findPackageInCategory
    });
    async function setRequest({Pool,StatementType,CategoryEntity}){
      const Request = await Pool.request();
      return Request
      .input('StatementType', sql.VarChar(20), StatementType)
      .input('uid', sql.Int, CategoryEntity.getuid())
      .input('name_th', sql.VarChar(200), CategoryEntity.getname_th())
      .input('name_en', sql.VarChar(200), CategoryEntity.getname_en())
      .input('image_url',sql.VarChar(5000),CategoryEntity.getImage_url())
      .input('detail', sql.VarChar(2000), CategoryEntity.getdetail())
      .input('start_date', sql.DateTime, CategoryEntity.getStart_date())
      .input('end_date', sql.DateTime, CategoryEntity.getEnd_date())
      .input('status', sql.VarChar(20), CategoryEntity.getstatus())
    }
    
    async function findAll({ StatementType = "GetAll",CategoryEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,CategoryEntity})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset;
    }
    async function findById({ StatementType = "GetId",CategoryEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,CategoryEntity})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset[0];
    }        
    
    async function findPackageInCategory({ StatementType = "GetPackageInCategory",CategoryEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,CategoryEntity})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset;
    }
    
    async function remove({ StatementType = "Delete",CategoryEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,CategoryEntity})
      await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
    }
    
    async function update({ StatementType = "Update",CategoryEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,CategoryEntity})
      await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
    }

    async function insert({ StatementType = "Insert",CategoryEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,CategoryEntity})
      await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
    }

   
    
}
