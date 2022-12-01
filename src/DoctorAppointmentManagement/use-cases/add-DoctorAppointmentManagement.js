module.exports = function  makeAddDoctorAppointmentManagement({DoctorAppointmentManagementAccessDB,makeDoctorAppointmentManagement}){
    return async function addDoctorAppointmentManagement({detail}){
        const DoctorAppointmentManagementEntity = makeDoctorAppointmentManagement(detail)
        
        await DoctorAppointmentManagementAccessDB.insert({DoctorAppointmentManagementEntity})
        
        return {
            message:'TheDoctorAppointmentManagement has successfully been added'
        }  
    }
}