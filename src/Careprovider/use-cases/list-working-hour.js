module.exports = function makeListWorkingHour({WorkingHourAccessDB,DoctorAppointmentManagementAccessDB,makeGetDoctorAppointmentManagement}){
    return async function listWorkingHour({params} = {}){        
        if(!params){
            throw new Error('You must supply a careprovider id.')
        }
        const CareProviderID = params.careprovider_id
        const LocationID = params.location_id

        const DoctorAppointmentManagementEntity = makeGetDoctorAppointmentManagement({location_uid:LocationID,careprovider_uid:CareProviderID})
        const DoctorAppointmentManagement = await DoctorAppointmentManagementAccessDB.findByCareproviderAndLocation({DoctorAppointmentManagementEntity})
        
        const {showSchedule} = DoctorAppointmentManagement
        
        const WorkingHour = await WorkingHourAccessDB.findById({CareProviderID,LocationID})
        
        if(!WorkingHour[0]){
          return {message:'No schedule'}
        }
        const Schedule = generateTimeSchedule(WorkingHour)
        
        return {showSchedule,...Schedule} 
      }
      
      function generateTimeSchedule(WorkingHour){ 
        const {uid,Name} = WorkingHour[0]
        var Schedule = {
            uid: uid,
            Name:Name,
            Monday: null,
            Tuesday: null,
            Wednesday: null,
            Thursday: null,
            Friday: null,
            Saturday: null,
            Sunday: null
        }
        
        for(var openHour of WorkingHour){
          Schedule.Monday = openHour.Monday || Schedule.Monday
          Schedule.Tuesday = openHour.Tuesday || Schedule.Tuesday
          Schedule.Wednesday = openHour.Wednesday || Schedule.Wednesday
          Schedule.Thursday = openHour.Thursday || Schedule.Thursday
          Schedule.Friday = openHour.Friday|| Schedule.Friday
          Schedule.Saturday =  openHour.Saturday || Schedule.Saturday 
          Schedule.Sunday = openHour.Sunday || Schedule.Sunday 
        }
        return Schedule
      }
    }