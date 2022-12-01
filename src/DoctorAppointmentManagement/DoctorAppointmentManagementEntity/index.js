
const buildDoctorAppointmentManagement = require('./DoctorAppointmentManagement')
const buildGetDoctorAppointmentManagement = require('./DoctorAppointmentManagement-for-get')



const makeDoctorAppointmentManagement = buildDoctorAppointmentManagement({})
const makeGetDoctorAppointmentManagement = buildGetDoctorAppointmentManagement({})


module.exports = {
    makeDoctorAppointmentManagement,
    makeGetDoctorAppointmentManagement
}

