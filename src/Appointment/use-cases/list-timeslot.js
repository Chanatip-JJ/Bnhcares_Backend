const {DateTime,FixedOffsetZone} = require('luxon')
module.exports = function makeListDate({makeGetTimeSlot,TimeSlotAccessDB,DoctorAppointmentManagementAccessDB,makeGetDoctorAppointmentManagement,WithdrawalAccessDB,makeGetWithdrawal}){
    return async function listTimeSlot({DateDetail}){
        const {
               SelectedDate,
               locationId,
               careproviderId
              } = DateDetail
        
        const DoctorAppointmentManagementEntity = makeGetDoctorAppointmentManagement({location_uid:locationId,careprovider_uid:careproviderId})
        const DoctorAppointmentManagement = await DoctorAppointmentManagementAccessDB.findByCareproviderAndLocation({DoctorAppointmentManagementEntity})
        
        const TimeSlotDetail = makeGetTimeSlot(DateDetail)
        var TimeSlot = await TimeSlotAccessDB.findAvailableSlot({TimeSlotDetail})
        

        if(!DoctorAppointmentManagement){
            return TimeSlot
        }
        //check if this session is only allowed to make teleconsultation
        const {isTeleconsultation,
               telephone,
               current_day_start_trim,
               start_time_trim,
               end_time_trim
               } = DoctorAppointmentManagement

        if(isTeleconsultation && isTeleconsultation == 'true'){
            return { message : `Please contact ${telephone}`}
        }
        
        
        // //trim current today
        if(current_day_start_trim > 0 && isToday(SelectedDate)){
            TimeSlot = trimCurrentDateTimeSlot(TimeSlot,SelectedDate,DoctorAppointmentManagement)
        }
        
        // //trim start_time and end_time
        if(start_time_trim > 0 || end_time_trim > 0) {
            TimeSlot = trimTimeSlot(TimeSlot,SelectedDate,DoctorAppointmentManagement)
        }

        // //withdraw today
        const WithdrawalEntity = makeGetWithdrawal({location_uid:locationId,careprovider_uid:careproviderId,selected_date:SelectedDate})
        const Withdrawal = await WithdrawalAccessDB.findWithdrawalDate({WithdrawalEntity})
        
        if(Withdrawal){
            TimeSlot = AvailableTimeSlot(TimeSlot,SelectedDate,Withdrawal)
        }

        return TimeSlot 
    }

    function trimCurrentDateTimeSlot(TimeSlot,SelectedDate,DoctorAppointmentManagement){
        const {current_day_start_trim} = DoctorAppointmentManagement
        const CurrentTime = currentTime()
        for(let slot of TimeSlot){
            
            var {SlotStart,SlotEnd} = slot

            //* time unit is milliseconds
            var startTime = adaptDateAndTime(SelectedDate,SlotStart)
            var endTime = adaptDateAndTime(SelectedDate,SlotEnd)

            // start time + setting period
            if(endTime <= (CurrentTime + current_day_start_trim*1000)){
                slot.Available = 0
                continue
            }

            if(startTime <= (CurrentTime + current_day_start_trim*1000)){
                slot.Available = 0
            }
        }

        return TimeSlot
    }

    function trimTimeSlot(TimeSlot,SelectedDate,DoctorAppointmentManagement){
        const {start_time_trim,end_time_trim} = DoctorAppointmentManagement
        const SlotNumber = TimeSlot.length
        const First_SlotStart = TimeSlot[0].SlotStart
        const Last_SlotEnd = TimeSlot[SlotNumber - 1].SlotEnd

        // find the start time of slot , 09:00:00
        const lower_bound = adaptDateAndTime(SelectedDate,First_SlotStart)
        //  find the ending time of slot, 17:00:00
        const upper_bound = adaptDateAndTime(SelectedDate,Last_SlotEnd)
        
        for(let slot of TimeSlot){
            
            var {SlotStart,SlotEnd} = slot

            //* time unit is milliseconds
            var startTime = adaptDateAndTime(SelectedDate,SlotStart)
            var endTime = adaptDateAndTime(SelectedDate,SlotEnd)
            
            if(startTime <= (lower_bound + start_time_trim*1000)){
                 slot.Available = 0
            }

            if(endTime >= (upper_bound - end_time_trim*1000)){
                 slot.Available = 0
            }
        }
        return TimeSlot
    }
    // turn available slot into unavailable one with withdrawal time 
    function AvailableTimeSlot(TimeSlot,SelectedDate,Withdrawal){
        const {start_time,end_time}= Withdrawal
        
        //* time unit is milliseconds
        const WithdrawalStart = adaptDateAndTime(SelectedDate,start_time)
        const WithdrawalEnd = adaptDateAndTime(SelectedDate,end_time)
        
        for(let slot of TimeSlot){
            
            var {SlotStart,SlotEnd} = slot

            //* time unit is milliseconds
            var startTime = adaptDateAndTime(SelectedDate,SlotStart)
            var endTime = adaptDateAndTime(SelectedDate,SlotEnd)
            
            if(startTime >= WithdrawalStart && endTime <= WithdrawalEnd){
                 slot.Available = 0
            }
        }
        return TimeSlot



    }

    function isToday(SelectedDate){
        const Today = new Date().toISOString()
        const CurrentDate = adaptISODateAndTime(Today).toISOString().split('T')
        return CurrentDate[0] == SelectedDate
    }

    function currentTime(){
        const Today = new Date().toISOString()
        const CurrentDateTime = adaptISODateAndTime(Today)
        return CurrentDateTime.getTime()
    }

    function adaptDateAndTime(date,time){
        return DateTime.fromFormat(`${date} ${time}`, "yyyy-MM-dd HH:mm:ss")
                       .setZone(FixedOffsetZone.parseSpecifier("GMT+7"))
                       .startOf("second")
                       .plus({ hours: 7 })
                       .toJSDate()
                       .getTime()
    }

    function adaptISODateAndTime(Date_Time){
        return DateTime.fromISO(`${Date_Time}`, "yyyy-MM-dd HH:mm:ss")
                       .setZone(FixedOffsetZone.parseSpecifier("GMT+7"))
                       .startOf("second")
                       .plus({ hours: 7 })
                       .toJSDate()            
    }

    function adaptDate(Date){
        const luxon_date = DateTime.fromISO(Date).setZone(FixedOffsetZone.parseSpecifier("GMT+7")).startOf("day")
        const JS_Date = luxon_date.plus({ hours: 7 }).toJSDate()
        return JS_Date
    }
}