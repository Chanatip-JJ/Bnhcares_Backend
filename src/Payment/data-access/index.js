const Mssql  = require('../../library/Mssql')
const buildPayment = require('./payment-sql')
const sql = require('mssql/msnodesqlv8')



const PaymentAccessDB = buildPayment({Mssql,sql})




module.exports = PaymentAccessDB



