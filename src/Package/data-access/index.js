const Mssql  = require('../../helpers/Mssql')
const buildPackage = require('./packages-sql')
const sql = require('mssql/msnodesqlv8')



const PackageAccessDB = buildPackage({Mssql,sql})




module.exports = PackageAccessDB



