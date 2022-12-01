module.exports = function makeListDoctorAppointmentManagementByCareprovider({DoctorAppointmentManagementAccessDB,makeGetDoctorAppointmentManagement}){
    return async function listDoctorAppointmentManagementByCareprovider({params} = {}){        
        if(!params){
            throw new Error('You must supply a careprovider id.')
        }
        
        const DoctorAppointmentManagementEntity = makeGetDoctorAppointmentManagement(params)
        
        const DoctorAppointmentManagement = await DoctorAppointmentManagementAccessDB.findByCareprovider({DoctorAppointmentManagementEntity})
      
        return DoctorAppointmentManagement
      }     
    }