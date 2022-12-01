module.exports = function makeListDoctorAppointmentManagement({DoctorAppointmentManagementAccessDB,makeGetDoctorAppointmentManagement}){
    return async function listDoctorAppointmentManagement({params} = {}){        
        if(!params){
            throw new Error('You must supply a location id.')
        }
        
        const DoctorAppointmentManagementEntity = makeGetDoctorAppointmentManagement(params)
        
        const DoctorAppointmentManagement = await DoctorAppointmentManagementAccessDB.findByLocation({DoctorAppointmentManagementEntity})
        

        return DoctorAppointmentManagement
      }     
    }