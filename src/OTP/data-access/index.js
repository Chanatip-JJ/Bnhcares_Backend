const Mssql = require('../../helpers/Mssql')
const sql = require('mssql/msnodesqlv8')
const buildOTP = require('./otp-sql')

const OTPAccessDB = buildOTP({Mssql,sql})


module.exports = {OTPAccessDB}