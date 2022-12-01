module.exports = function buildPatient({date_config, sql}) { 
    const STORED_PROCEDURE_NAME = 'dbo.spDMKT_Patient'
    return Object.freeze({
      findByHN
    });
    
    async function setRequest({Pool,HN}){
      const Request = await Pool.request();
      return Request
      .input('HN', sql.VarChar(30), HN)
       }
       
    async function findByHN({HN}) {
        const Pool = await new sql.ConnectionPool(date_config).connect()
        const Request = await setRequest({Pool,HN})
        const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
        Pool.close();
        return result.recordset;
    }

    



    // async function findAll({ StatementType = "GetAll",SpecialityEntity} = {}) {
    //   const Pool = await Mssql.getConnect();
    //   const Request = await setRequest({Pool,StatementType,SpecialityEntity})
    //   const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
    //   Pool.close();
    //   return result.recordset;
    // }
    // async function findById({ StatementType = "GetId",SpecialityEntity} = {}) {
    //   const Pool = await Mssql.getConnect();
    //   const Request = await setRequest({Pool,StatementType,SpecialityEntity})
    //   const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
    //   Pool.close(); 
    //   return result.recordset;
    // }        
     
}
