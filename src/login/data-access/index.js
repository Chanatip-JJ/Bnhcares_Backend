const Mssql = require('../../helpers/Mssql')
const sql = require('mssql/msnodesqlv8')
const buildLogin = require('./login-sql')
const buildUser = require('./user-sql')
const buildNewPatient = require('./new-patient-sql')

const LoginAccessDB = buildLogin({Mssql,sql})
const UserAccessDB = buildUser({Mssql,sql})
const NewPatientAccessDB = buildNewPatient({Mssql,sql})




module.exports = {LoginAccessDB,UserAccessDB,NewPatientAccessDB}