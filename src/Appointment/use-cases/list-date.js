module.exports = function makeListDate({makeGetDate,DatePickerAccessDB,DoctorAppointmentManagementAccessDB,makeGetDoctorAppointmentManagement}){
    return async function listDate({AppointmentMonthYear}){
        
        const AppointmentDetail = makeGetDate(AppointmentMonthYear)
        let DatePicker = await DatePickerAccessDB.findAvailableDate({AppointmentDetail})
        const DoctorAppointmentManagementEntity = makeGetDoctorAppointmentManagement({location_uid:AppointmentMonthYear.locationId,careprovider_uid:AppointmentMonthYear.careproviderId})
        const DoctorAppointmentManagement = await DoctorAppointmentManagementAccessDB.findByCareproviderAndLocation({DoctorAppointmentManagementEntity})
        

        if(!DoctorAppointmentManagement){
            return DatePicker
        }
        // check that there are any unavailable days in week which the doctor do not want to visit.
        if(!checkUnavailableForOnlineAppointment(DoctorAppointmentManagement)){
            return DatePicker
        }
        
        // make unavailable date in calendar. 
        DatePicker = AvailableOnlineDate(DatePicker,DoctorAppointmentManagement)
        return DatePicker     
    }

    function AvailableOnlineDate(DatePicker,DoctorAppointmentManagement){
            var unavailableDayInWeek = checkUnavailableDay(DoctorAppointmentManagement) 
            for(var date of DatePicker){
                var {day_index} = date
                if(unavailableDayInWeek[day_index] == true){
                    date.Available = 0
                }
            }
            return DatePicker
    }


    function checkUnavailableForOnlineAppointment({
        sunday,
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday}){
        return sunday || monday || tuesday || wednesday || thursday || friday || saturday
    }
    function checkUnavailableDay({
        sunday,
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday}){

        return [sunday,monday,tuesday,wednesday,thursday,friday,saturday]
    }
}