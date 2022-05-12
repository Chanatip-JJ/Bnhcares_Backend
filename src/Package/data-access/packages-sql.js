module.exports = function buildPackage({Mssql, sql}) { 
  const STORED_PROCEDURE_NAME = "dbo.spPackage"
    return Object.freeze({
      findAll,
      findById,
      insert,
      update,
      remove
    });
    async function setRequest({Pool,StatementType,PackageEntity}){
      const Request = await Pool.request();
      return Request
      .input('StatementType', sql.VarChar(20), StatementType)
      .input('uid', sql.Int, PackageEntity.getUid())          
      .input('name_th', sql.VarChar(sql.MAX), PackageEntity.getNameTH())
      .input('name_en', sql.VarChar(sql.MAX), PackageEntity.getNameEN())
      .input('product_priority', sql.Int, PackageEntity.getProduct_priority())
      .input('package_saleprice', sql.Money, PackageEntity.getSalePrice())
      .input('description', sql.VarChar(sql.MAX), PackageEntity.getDescription())
      .input('package_regprice', sql.Money, PackageEntity.getRegPrice())
      .input('package_sale_start', sql.DateTime, PackageEntity.getSaleStart())
      .input('package_sale_end', sql.DateTime, PackageEntity.getSaleEnd())
      .input('package_preservice_th', sql.VarChar(sql.MAX), PackageEntity.getPreServiceTH())
      .input('package_postservice_th', sql.VarChar(sql.MAX), PackageEntity.getPostServiceTH())
      .input('package_preservice_en', sql.VarChar(sql.MAX), PackageEntity.getPreServiceEN())
      .input('package_postservice_en', sql.VarChar(sql.MAX), PackageEntity.getPostServiceEN())
      .input('image', sql.VarChar(1000), PackageEntity.getImage())
      .input('status', sql.VarChar(10), PackageEntity.getStatus())
      .input('active_from', sql.DateTime, PackageEntity. getActiveFrom())
      .input('active_to', sql.DateTime, PackageEntity.getActiveTO())
    }
    
    async function findAll({ StatementType = "GetAll",PackageEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,PackageEntity})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset;
    }
    async function findById({ StatementType = "GetId",PackageEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,PackageEntity})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset;
    }        
    
    async function remove({ StatementType = "Delete",PackageEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,PackageEntity})
      await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
    }
    
    async function update({ StatementType = "Update",PackageEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,PackageEntity})
      await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
    }

    async function insert({ StatementType = "Insert",PackageEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,PackageEntity})
      await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
    }
    
}
