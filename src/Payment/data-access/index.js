const Mssql  = require('../../helpers/Mssql')
const buildPayment = require('./payment-sql')
const sql = require('mssql/msnodesqlv8')



const PaymentAccessDB = buildPayment({Mssql,sql})




module.exports = PaymentAccessDB



