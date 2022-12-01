module.exports = function buildCart({Mssql, sql}) { 
  const STORED_PROCEDURE_NAME = "dbo.spCart"
    return Object.freeze({
      findAll,
      findById,
      insert,
      update,
      remove,
      removeAll
    });

    async function setRequest({Pool,StatementType,CartEntity}){
      const Request = await Pool.request();
      return Request
      .input('StatementType', sql.VarChar(20),StatementType)
      .input('user_id', sql.Int, CartEntity.getuser_id())
      .input('PERSON_NO', sql.Int, CartEntity.getPERSON_NO())
      .input('package_uid', sql.Int, CartEntity.getpackage_uid())
      .input('quantity', sql.Int, CartEntity.getquantity())
      .input('UTM_SOURCE', sql.VarChar(500), CartEntity.getUTM_SOURCE())
      .input('UTM_MEDIUM', sql.VarChar(500), CartEntity.getUTM_MEDIUM())
      .input('UTM_CAMPAIGN', sql.VarChar(500), CartEntity.getUTM_CAMPAIGN())
    }    
      
    
    async function findAll({ StatementType = "GetCart",CartEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,CartEntity})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset;
    }

    async function findById({ StatementType = "GetById",CartEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,CartEntity})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset[0];
    }
           
    async function remove({ StatementType = "Delete",CartEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,CartEntity})
      await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
    }
    async function removeAll({ StatementType = "DeleteAll",CartEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,CartEntity})
      await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
    }
    
    async function update({ StatementType = "Update",CartEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,CartEntity})
      await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
    }

    async function insert({ StatementType = "Insert",CartEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,CartEntity})
      await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
    }
  
}
