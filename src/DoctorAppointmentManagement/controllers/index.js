const {
        listDoctorAppointmentManagementByLocation,
        listDoctorAppointmentManagementByCareprovider,
        addDoctorAppointmentManagement,
        editDoctorAppointmentManagement
      } = require('../use-cases');
      

const makeGetDoctorAppointmentManagementByLocation = require('./get-DoctorAppointmentManagement-location')
const makeGetDoctorAppointmentManagementByCareprovider = require('./get-DoctorAppointmentManagement-careprovider')
const makeAddDoctorAppointmentManagement = require('./post-DoctorAppointmentManagement')
const makeEditDoctorAppointmentManagement = require('./patch-DoctorAppointmentManagement')



const getDoctorAppointmentManagementByLocation = makeGetDoctorAppointmentManagementByLocation({listDoctorAppointmentManagementByLocation});
const postDoctorAppointmentManagement = makeAddDoctorAppointmentManagement({addDoctorAppointmentManagement})
const patchDoctorAppointmentManagement = makeEditDoctorAppointmentManagement({editDoctorAppointmentManagement})
const getDoctorAppointmentManagementByCareprovider = makeGetDoctorAppointmentManagementByCareprovider({listDoctorAppointmentManagementByCareprovider})
module.exports = {
  getDoctorAppointmentManagementByLocation,
  postDoctorAppointmentManagement,
  patchDoctorAppointmentManagement,
  getDoctorAppointmentManagementByCareprovider
};

