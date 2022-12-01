const DoctorAppointmentManagementAccessDB = require('../data-access')

const makeListDoctorAppointmentManagementByLocation = require('./list-DoctorAppointmentManagement-location')
const makeAddDoctorAppointmentManagement = require('./add-DoctorAppointmentManagement')
const makeEditDoctorAppointmentManagement = require('./edit-DoctorAppointmentManagement')
const makeListDoctorAppointmentManagementByCareprovider = require('./list-DoctorAppointmentManagement-careprovider')


const {
    makeDoctorAppointmentManagement,
    makeGetDoctorAppointmentManagement
} = require('../DoctorAppointmentManagementEntity')


const listDoctorAppointmentManagementByLocation = makeListDoctorAppointmentManagementByLocation({DoctorAppointmentManagementAccessDB,makeGetDoctorAppointmentManagement})
const addDoctorAppointmentManagement = makeAddDoctorAppointmentManagement({DoctorAppointmentManagementAccessDB,makeDoctorAppointmentManagement})
const editDoctorAppointmentManagement = makeEditDoctorAppointmentManagement({DoctorAppointmentManagementAccessDB,makeDoctorAppointmentManagement,makeGetDoctorAppointmentManagement})
const listDoctorAppointmentManagementByCareprovider = makeListDoctorAppointmentManagementByCareprovider({DoctorAppointmentManagementAccessDB,makeGetDoctorAppointmentManagement})
module.exports = {
    listDoctorAppointmentManagementByLocation,
    addDoctorAppointmentManagement ,
    editDoctorAppointmentManagement,
    listDoctorAppointmentManagementByCareprovider
}
