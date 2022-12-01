const Mssql  = require('../../helpers/Mssql')
const buildPackageCareProvider = require('./packages-careprovider-sql')
const sql = require('mssql/msnodesqlv8')



const PackageCareProviderAccessDB = buildPackageCareProvider({Mssql,sql})




module.exports = PackageCareProviderAccessDB



