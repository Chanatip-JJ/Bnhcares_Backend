const Mssql  = require('../../helpers/Mssql')
const buildBanner = require('./banner-sql')
const sql = require('mssql/msnodesqlv8')



const BannerAccessDB = buildBanner({Mssql,sql})




module.exports = BannerAccessDB



