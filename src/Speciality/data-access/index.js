const Mssql  = require('../../helpers/Mssql')
const buildSpeciality = require('./speciality-sql')
const buildSpecialityCareProvider = require('./speciality-careprovider-sql')
const sql = require('mssql/msnodesqlv8')




const SpecialityAccessDB = buildSpeciality({Mssql,sql})
const SpecialityCareProviderAccessDB = buildSpecialityCareProvider({Mssql,sql})



module.exports = {SpecialityAccessDB,SpecialityCareProviderAccessDB}



