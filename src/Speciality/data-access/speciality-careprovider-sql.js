module.exports = function buildSpeciality({Mssql, sql}) { 
    const STORED_PROCEDURE_NAME = 'dbo.spSpecialityCareprovider'
    return Object.freeze({
      findCareProvider
    });
    
    async function setRequest({Pool,SpecialityID}){
      const Request = await Pool.request();
      return Request.input('SpecialityID', sql.Int, SpecialityID)  
    }

    async function findCareProvider({SpecialityID}) {
      const Pool = await Mssql.getConnect()
      const Request = await setRequest({Pool,SpecialityID})
      const result = await Request.execute(`${STORED_PROCEDURE_NAME}`);
      Pool.close(); 
      return result.recordset;
    }        
}
