const {date_config} = require('../../helpers/Mssql/Date_config')
const buildPatient = require('./patient-sql')
const buildSearchPatient = require('./patient-search-sql')
const buildCheckPatient = require('./patient-check-sql')
const sql = require('mssql/msnodesqlv8')
const Mssql  = require('../../helpers/Mssql')



const PatientAccessDB = buildPatient({date_config,sql})
const PatientSearchAccessDB = buildSearchPatient({date_config,sql})
const checkPatientAccessDB = buildCheckPatient({Mssql,sql})

module.exports = {PatientAccessDB,PatientSearchAccessDB,checkPatientAccessDB}



