const Mssql  = require('../../helpers/Mssql')
const buildCategory = require('./category-sql')
const sql = require('mssql/msnodesqlv8')



const CategoryAccessDB = buildCategory({Mssql,sql})


module.exports = CategoryAccessDB



