const Mssql  = require('../../helpers/Mssql')
const buildAdditionalCareprovider = require('./AdditionalCareprovider-sql')
const sql = require('mssql/msnodesqlv8')



const AdditionalCareproviderAccessDB = buildAdditionalCareprovider({Mssql,sql})




module.exports = AdditionalCareproviderAccessDB



