const Mssql  = require('../../helpers/Mssql')
const buildFeature = require('./feature-sql')
const sql = require('mssql/msnodesqlv8')



const FeatureAccessDB = buildFeature({Mssql,sql})


module.exports = FeatureAccessDB



