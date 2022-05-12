const Mssql  = require('../../library/Mssql')
const buildPerson = require('./person-sql')
const sql = require('mssql/msnodesqlv8')



const PersonAccessDB = buildPerson({Mssql,sql})




module.exports = PersonAccessDB



