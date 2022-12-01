const Mssql  = require('../../helpers/Mssql')
const buildDoctorAppointmentManagement = require('./DoctorAppointmentManagement-sql')
const sql = require('mssql/msnodesqlv8')



const DoctorAppointmentManagementAccessDB = buildDoctorAppointmentManagement({Mssql,sql})




module.exports = DoctorAppointmentManagementAccessDB



