
/**
 * @swagger
 * components:
 *   schemas:
 *     Booking:
 *       type: object
 *       properties:
 *          AppointmentDate:
 *            type: date
 *            example: "2022-09-30"
 *            pattern: "YYYY-MM-DD"
 *          CareproviderUID:
 *            type: integer
 *            example: 1882  
 *          ORDDT_NO:
 *            type: integer
 *          TokenNumber:
 *            type: string  
 *          PatientUID:
 *            type: integer
 *            example: 346262  
 *          ServiceUID:
 *            type: integer
 *            example: 1882
 *          LocationUID:
 *            type: integer
 *            example: 61  
 *          SlotDefinitionUID:
 *            type: integer
 *          SlotStartTime:
 *            example: "09:30:00"
 *            type: string
 *            pattern: "HH-MM-SS"  
 *          SlotEndTime:
 *            example: "10:00:00"
 *            type: string
 *            pattern: "HH-MM-SS" 
 *          UserId:
 *            type: integer
 *          HN:
 *            type: string
 *          Name:
 *            type: string
 *          Comment:
 *            type: string     
 */
 
module.exports = function buildBooking({DateTime,FixedOffsetZone}) {
        return function makeBooking({
                 AppointmentDate, // 2021-11-13 00:00:00.000 
                 CareproviderUID,
                 TokenNumber,
                 PatientUID,
                 ServiceUID,
                 LocationUID,
                 SlotDefinitionUID,
                 SlotStartTime, // 2021-11-13 09:30:00
                 SlotEndTime, // 2021-11-13 09:59:59
                 UserId,
                 HN,
                 Name,
                 Comments    
                } = {}) {

        if(!AppointmentDate){
            throw new Error('Booking must have an appointment date')
        }
        
        if(CareproviderUID <= 0 || !CareproviderUID){
            throw new Error('Booking must have a careprovider id')
        }
        
        if(!PatientUID){
            throw new Error('Booking must have a patient id')
        }

        if(ServiceUID <= 0 || !ServiceUID){
            throw new Error('Booking must have a service id')
        }

        if(LocationUID <= 0 || !LocationUID){
            throw new Error('Booking must have a location id')     
        }

        if(SlotDefinitionUID <= 0 || !SlotDefinitionUID){
            throw new Error('Booking must have a slot id')     
        }

        if(!SlotStartTime){
            throw new Error('Booking must have a start time')
        }    

        if(!SlotEndTime){
            throw new Error('Booking must have an end time')
        }

        if(!UserId){
            throw new Error('Booking must have a user id')
        }

        if(!HN){
            throw new Error('Booking must have a hospital number')
        }

        if(!Name){
            throw new Error('Booking must have name')
        }

        //* check this number in table ReferenceValue and ReferenceDomain in b-connect
        const BOOKING_MODE = 34371 // online booking
        const BOOKED_STATUS = 822 // booked status 
        const APPOINTMENT_CODE = 13720// visit for appointment 
        const fixedAppointmentDate =  adaptDate(AppointmentDate)           
        const fixedSlotStartTime = adaptDateAndTime(AppointmentDate,SlotStartTime) 
        const fixedSlotEndTime = adaptDateAndTime(AppointmentDate,SlotEndTime)            
        //const comment = checkOrderID(ORDDT_NO,ORDDT_LINENO)
        const BookingID = generateUUID()        
        return Object.freeze({
            getAppointmentDttm:() => fixedAppointmentDate,
            getBookingID:() => BookingID, 
            getBKSTSUID :() => BOOKED_STATUS,   
            getCareproviderUID  :() => CareproviderUID,  
            getComments :() => Comments || null,         
            getExpectedArrivalDttm  :() => null,    
            getOutcomeUID  :() => 0,  
            getOwnerOrganisationUID  :() => 9,  
            getPatientUID  :() => PatientUID,  
            getServiceUID :() => ServiceUID,  
            getLocationUID :() => LocationUID, 
            getSlotDefinitionUID :() => SlotDefinitionUID, 
            getSlotEndDttm :() =>  fixedSlotEndTime , 
            getSlotStartDttm :() => fixedSlotStartTime, 
            getTokenNumber :() => TokenNumber, 
            getVISTYUID :() => APPOINTMENT_CODE, // visit type
            getCancellationReson :() => 0, 
            getCUser :() => 4425, // who make appointment
            getReferredByUID :() => 0, 
            getBookingNumber :() =>'ONLINE_BOOKING_2062', 
            getBKTYPUID :() => 0, 
            getBKMODUID :() => BOOKING_MODE // booking mode
        })
    }

    function adaptDate(AppointmentDate){
        const luxon_date = DateTime.fromISO(AppointmentDate).setZone(FixedOffsetZone.parseSpecifier("GMT+7")).startOf("day")
        const JS_Date = luxon_date.plus({ hours: 7 }).toJSDate();
        return JS_Date
    }

    function adaptDateAndTime(AppointmentDate,time){
        const luxon_date_time = DateTime.fromFormat(`${AppointmentDate} ${time}`, "yyyy-MM-dd HH:mm:ss").setZone(FixedOffsetZone.parseSpecifier("GMT+7")).startOf("second");
        const JS_Date = luxon_date_time.plus({ hours: 7 }).toJSDate();
        return JS_Date
    }

    // function Comment(ORDDT_NO,ORDDT_LINENO){ 
        
    //     var Comment = `{
    //                     Type : Package,
    //                     OrderNO:${ORDDT_NO}, 
    //                     ORDDT_LINENO:${ORDDT_LINENO}
    //                     }`

    //     if(!ORDDT_NO || (ORDDT_LINENO === null) ){
    //        var Comment = `{Type : Doctor}`     
    //     }
    //     return Comment
    // }

    function generateUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }
}


