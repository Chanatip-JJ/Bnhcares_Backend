const Mssql  = require('../../helpers/Mssql')
const buildWithdrawal = require('./Withdrawal-sql')
const sql = require('mssql/msnodesqlv8')



const WithdrawalAccessDB = buildWithdrawal({Mssql,sql})




module.exports = WithdrawalAccessDB



