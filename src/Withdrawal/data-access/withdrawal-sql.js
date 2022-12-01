module.exports = function buildWithdrawal({Mssql, sql}) { 
  const STORED_PROCEDURE_NAME = "dbo.spWithdrawal"
    return Object.freeze({
      findByID,
      update,
      insert,
      findByCareproviderAndLocationID,
      findWithdrawalDate,
    });
    
    async function setRequest({Pool,StatementType,WithdrawalEntity}){
      const Request = await Pool.request();
      
      return Request
      .input('StatementType', sql.VarChar(200), StatementType)
      .input('uid',sql.Int, WithdrawalEntity.getUID())
      .input('careprovider_uid',sql.Int, WithdrawalEntity.getCareprovider_uid())
      .input('location_uid', sql.Int, WithdrawalEntity.getLocation_uid()) 
      .input('start_date', sql.Date, WithdrawalEntity.getStartDate()) 
      .input('end_date', sql.Date, WithdrawalEntity.getEndDate())
      .input('start_time', sql.Time, WithdrawalEntity.getStartTime())
      .input('end_time', sql.Time, WithdrawalEntity.getEndTime())
      .input('selected_date', sql.Date ,WithdrawalEntity.getSelectedDate())
      .input('status',sql.VarChar(30),WithdrawalEntity.getStatus())
    }

    async function findByID({ StatementType = "GetByID",WithdrawalEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,WithdrawalEntity})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset;
    }   
    
    async function findWithdrawalDate({ StatementType = "GetWithdrawalDate",WithdrawalEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,WithdrawalEntity})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset[0];
    }

    async function findByCareproviderAndLocationID({ StatementType = "GetByCareproviderAndLocation",WithdrawalEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,WithdrawalEntity})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset;
    }

    async function update({ StatementType = "Update",WithdrawalEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,WithdrawalEntity})
      await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
    }

    async function insert({ StatementType = "Insert",WithdrawalEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,WithdrawalEntity})
      await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
    }


    async function findByDate({ StatementType = "GetWithdrawal",WithdrawalEntity} = {}) {
      const Pool = await Mssql.getConnect();
      const Request = await setRequest({Pool,StatementType,WithdrawalEntity})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close();
      return result.recordset;
    }

}
