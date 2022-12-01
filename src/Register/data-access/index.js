const Mssql = require('../../helpers/Mssql')
const sql = require('mssql/msnodesqlv8')
const buildRegister = require('./register-sql')
const buildLine = require('./line-sql')

const registerAccessDB = buildRegister({Mssql,sql})
const lineAccessDB = buildLine({Mssql,sql})



module.exports = {registerAccessDB, lineAccessDB}