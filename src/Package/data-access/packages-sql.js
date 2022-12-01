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
      //.input('product_priority', sql.Int, PackageEntity.getPackage_priority())
      .input('package_saleprice', sql.Decimal(18, 4), PackageEntity.getSalePrice())
      .input('description_th', sql.VarChar(sql.MAX), PackageEntity.getDescription_th())
      .input('description_en', sql.VarChar(sql.MAX), PackageEntity.getDescription_en())
      .input('package_regprice', sql.Decimal(18, 4), PackageEntity.getRegPrice())
      .input('package_sale_start', sql.DateTime, PackageEntity.getSaleStart())
      .input('package_sale_end', sql.DateTime, PackageEntity.getSaleEnd())
      .input('package_preservice_th', sql.VarChar(sql.MAX), PackageEntity.getPreServiceTH())
      .input('package_postservice_th', sql.VarChar(sql.MAX), PackageEntity.getPostServiceTH())
      .input('package_preservice_en', sql.VarChar(sql.MAX), PackageEntity.getPreServiceEN())
      .input('package_postservice_en', sql.VarChar(sql.MAX), PackageEntity.getPostServiceEN())
      .input('image', sql.VarChar(1000), PackageEntity.getImage())
      .input('category', sql.VarChar(100), PackageEntity.getCategory())
      .input('second_category', sql.VarChar(100), PackageEntity.getSecondCategory())
      .input('alert_message_th', sql.VarChar(1000), PackageEntity.getAlert_message_th())
      .input('early_book',sql.Int, PackageEntity.getEarly_book())
      .input('book_deadline', sql.DateTime, PackageEntity.getBook_deadline())
      .input('alert_message_en', sql.VarChar(1000), PackageEntity.getAlert_message_en())
      .input('department_contact_th',sql.VarChar(2000),PackageEntity.getDepartmentContact_th())
      .input('department_contact_en',sql.VarChar(2000),PackageEntity.getDepartmentContact_en())
      .input('status', sql.VarChar(10), PackageEntity.getStatus())
      .input('active_from', sql.DateTime, PackageEntity.getActiveFrom())
      .input('active_to', sql.DateTime, PackageEntity.getActiveTO())
    }
    
    async function findAll({StatementType = "GetAll",PackageEntity} = {}) {
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
      return result.recordset[0];
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
