const Mssql  = require('../../helpers/Mssql')
const buildDepartment = require('./department-sql')
const buildDepartmentCareProvider = require('./department-careprovider-sql')
const sql = require('mssql/msnodesqlv8')




const DepartmentAccessDB = buildDepartment({Mssql,sql})
const DepartmentCareProviderAccessDB = buildDepartmentCareProvider({Mssql,sql})



module.exports = {DepartmentAccessDB,DepartmentCareProviderAccessDB} 



