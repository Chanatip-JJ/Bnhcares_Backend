module.exports = function makeEditDoctorAppointmentManagement({DoctorAppointmentManagementAccessDB,makeDoctorAppointmentManagement,makeGetDoctorAppointmentManagement}){
    return async function editDoctorAppointmentManagement({edit,params} ={}){
        console.log(params)
        // set Params before passing through Mssql  
        var DoctorAppointmentManagementEntity = makeGetDoctorAppointmentManagement({
            uid: params.uid
          })
        // check existing data before update
        const existing = await DoctorAppointmentManagementAccessDB.findByID({
            DoctorAppointmentManagementEntity
        })
        
        // check existing 
        if(!existing){
            throw new RangeError('DoctorAppointmentManagement not found.')
        }   
        // set Params before passing through Mssql
        var DoctorAppointmentManagementEntity  = makeDoctorAppointmentManagement({...existing[0],...edit})
        await DoctorAppointmentManagementAccessDB.update({DoctorAppointmentManagementEntity})
        
        return  {
            message:'The DoctorAppointmentManagement has successfully been edited'
        }        
    }
}