module.exports = function buildPackage({Mssql, sql}) { 
  const STORED_PROCEDURE_NAME = "dbo.spNotification"
    return Object.freeze({
      findByUserID,
      findByID,
      update,
      insert
    });
    async function setRequest({Pool,StatementType,NotificationEntity}){
      const Request = await Pool.request();
      return Request
      .input('StatementType', sql.VarChar(20), StatementType)
      .input('uid', sql.Int, NotificationEntity.getUID())
      .input('user_uid', sql.Int, NotificationEntity.getUser_uid())          
      .input('campaign_name', sql.VarChar(2000), NotificationEntity.getCampaign_name())
      .input('topic', sql.VarChar(1000), NotificationEntity.getTopic())
      .input('message', sql.VarChar(2000), NotificationEntity.getMessage())
      .input('status', sql.VarChar(50), NotificationEntity.getStatus())
      .input('send_timestamp', sql.DateTime, NotificationEntity.getSend_timestamp())
      .input('read_timestamp', sql.DateTime, NotificationEntity.getRead_timestamp())
      .input('expire_date', sql.DateTime, NotificationEntity.getExpire_date())
    }
    
    async function findByUserID({ StatementType = "GetByUserId",NotificationEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,NotificationEntity})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset[0];
    }        
    
    async function findByID({ StatementType = "GetById",NotificationEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,NotificationEntity})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset[0];
    }
    
    async function update({ StatementType = "Update",NotificationEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,NotificationEntity})
      await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
    }

    async function insert({ StatementType = "Insert",NotificationEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,NotificationEntity})
      await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
    }

}
