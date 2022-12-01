const Mssql  = require('../../helpers/Mssql')
const buildPatientVisit = require('./patient-visit-sql')
const buildPatientVisitResult = require('./patient-visit-result-sql')
const sql = require('mssql/msnodesqlv8')
const {date_config} = require('../../helpers/Mssql/Date_config')



const PatientVisitAccessDB = buildPatientVisit({date_config,sql})
const PatientVisitResultAccessDB = buildPatientVisitResult({date_config,sql})



module.exports = {PatientVisitAccessDB,PatientVisitResultAccessDB} 



