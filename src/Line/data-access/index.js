const Mssql = require('../../helpers/Mssql')
const sql = require('mssql/msnodesqlv8')
const buildLine = require('./line-sql')


const LineAccessDB = buildLine({Mssql,sql})

module.exports = {LineAccessDB}