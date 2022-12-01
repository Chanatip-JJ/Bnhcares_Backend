
/**
 * @swagger
 * components:
 *   schemas:
 *     EditBooking:
 *       type: object
 *       properties:
 *          UID:
 *            type: integer
 *          AppointmentDttm:
 *            type: date
 *            example: "2022-09-30"
 *            pattern: "YYYY-MM-DD"
 *          BKSTSUID:
 *            type: integer
 *          BookingID:
 *            type: integer
 *          CareproviderUID:
 *            type: integer
 *          Comments:
 *            type: string
 *          ExpectedArrivalDttm:
 *            type: string
 *          OutcomeUID:
 *            type: integer
 *          OwnerOrganisationUID:
 *            type: integer
 *            example: 9    
 *          PatientUID:
 *            type: integer
 *          ServiceUID:
 *            type: integer
 *          LocationUID:
 *            type: integer
 *          SlotDefinitionUID:
 *            type: integer
 *          SlotStartDttm:
 *            example: "09:30:00"
 *            type: string
 *            pattern: "HH-MM-SS"  
 *          SlotEndDttm:
 *            example: "10:00:00"
 *            type: string
 *            pattern: "HH-MM-SS"
 *          TokenNumber:
 *            type: string    
 *          VISTYUID:
 *            type: string   
 *          CancellationReson:
 *            type: integer
 *          CUser:  
 *            type: integer  
 *          CWhen:
 *            type: string
 *          ReferredByUID:
 *            type: integer  
 *          BookingNumber:
 *            type: string  
 *          BKTYPUID:
 *            type: integer
 *          BKMODUID:
 *            type: integer  
 *          AssetUID:
 *            type: integer  
 *          BookedServiceUID:
 *            type: integer
 *          RecurrenceUID:
 *            type: integer
 *          action:
 *            type: string
 *            enum: [Confirm,Book,Cancel,Reschedule]
 *          UserId:
 *            type: integer
 *            example: 58        
 */
 
module.exports = function buildEditBooking({DateTime,FixedOffsetZone}) {
        return function makeEditBooking({
            UID,  
            AppointmentDttm	,  
            BKSTSUID,    
            BookingID,  
            CareproviderUID,   
            Comments,          
            ExpectedArrivalDttm,     
            OutcomeUID,   
            OwnerOrganisationUID,   
            PatientUID,   
            ServiceUID,   
            LocationUID,
            SlotDefinitionUID,   
            SlotEndDttm,  
            SlotStartDttm,  
            TokenNumber,  
            VISTYUID,  
            CancellationReson,  
            CUser,  
            CWhen,
            ReferredByUID,
            BookingNumber,
            BKTYPUID,
            BKMODUID,
            AssetUID,
            BookedServiceUID,
            RecurrenceUID,
            action,
            UserId			
        } = {}) {
        
        const BookingAction = ['Book','Cancel','Confirm']    

        if(!action){
            throw new Error('Editing booking must supplied action')
        }
        
        if(!BookingAction.includes(action)){
            throw new Error('Editing id out of action')
        }
        
        if(!UID){
            throw new Error('UID must be supplied')
        }

        if(!BookingID){
            throw new Error('BookingID must be supplied')
        }

        //* use this field to store 'BC.ORDERHEADER.LINENO' 
        // if(!TokenNumber){
        //     throw new Error('TokenNumber must be supplied')
        // }

        if(!PatientUID){
            throw new Error('PatientUID must be supplied')
        }

        if(!LocationUID){
            throw new Error('LocationUID must be supplied')
        }

        if(!VISTYUID){
            throw new Error('VISTYUID must be supplied')
        }

        if(!OwnerOrganisationUID){
            throw new Error('OwnerOrganisationUID must be supplied')
        }

        if(!SlotDefinitionUID){
            throw new Error('SlotDefinitionUID must be supplied')
        }

        if(!SlotEndDttm){
            throw new Error('SlotEndDttm must be supplied')
        }

        if(!SlotStartDttm){
            throw new Error('SlotEndDttm must be supplied')
        }

        if(!AppointmentDttm){
            throw new Error('AppointmentDttm must be supplied')
        }

        if(!BKMODUID){
            throw new Error('BKMODUID must be supplied')
        }
    
        //* check this number in table ReferenceValue and ReferenceDomain in b-connect
        const BOOKING_MODE = 34371 // online booking
        const APPOINTMENT_CODE = 13720// visit for appointment
        const fixedAppointmentDate =  adaptDate(AppointmentDttm)           
        const fixedSlotStartTime = adaptDateAndTime(AppointmentDttm,SlotStartDttm)
        const fixedSlotEndTime = adaptDateAndTime(AppointmentDttm,SlotEndDttm)             
        const EDIT_ACTION =  updateAction(action)  
        const adaptedCWhen = adaptCWhen(CWhen)

        return Object.freeze({
            getBookingUID:() => UID,
            getAppointmentDttm:() => fixedAppointmentDate, 
            getBKSTSUID :() => EDIT_ACTION,
            getBookingID:() => BookingID,   
            getCareproviderUID  :() => CareproviderUID,  
            getComments :() => Comments,         
            getExpectedArrivalDttm  :() => ExpectedArrivalDttm ,    
            getOutcomeUID  :() => OutcomeUID,  
            getOwnerOrganisationUID  :() => OwnerOrganisationUID,  
            getPatientUID  :() => PatientUID,  
            getServiceUID :() => ServiceUID,  
            getLocationUID :() => LocationUID, 
            getSlotDefinitionUID :() => SlotDefinitionUID, 
            getSlotEndDttm :() =>  fixedSlotEndTime , 
            getSlotStartDttm :() => fixedSlotStartTime , 
            getTokenNumber :() => TokenNumber, 
            getVISTYUID :() => VISTYUID, 
            getCancellationReson :() => CancellationReson , 
            getCUser :() => CUser,
            getCWhen :() =>  adaptedCWhen,
            getReferredByUID :() => ReferredByUID , 
            getBookingNumber :() =>BookingNumber , 
            getBKTYPUID :() => BKTYPUID , 
            getBKMODUID :() => BKMODUID ,
            getAssetUID :() => AssetUID ,
            getBookedServiceUID:() => BookedServiceUID ,
            getRecurrenceUID :()=> RecurrenceUID 
        })
    }

    function adaptDate(AppointmentDate){
        const luxon_date = DateTime.fromISO(AppointmentDate).setZone(FixedOffsetZone.parseSpecifier("GMT+7")).startOf("day")
        const JS_Date = luxon_date.plus({ hours: 7 }).toJSDate()
        return JS_Date
    }

    function adaptDateAndTime(AppointmentDate,time){
        const luxon_date_time = DateTime.fromFormat(`${AppointmentDate} ${time}`, "yyyy-MM-dd HH:mm:ss").setZone(FixedOffsetZone.parseSpecifier("GMT+7")).startOf("second");
        const js_date = luxon_date_time.plus({ hours: 7 }).toJSDate()
        return js_date
    }

    function adaptCWhen(Cwhen){
        const luxon_date_time = DateTime.fromFormat(Cwhen, "yyyy-MM-dd HH:mm:ss").setZone(FixedOffsetZone.parseSpecifier("GMT+7")).startOf("second");
        const js_date = luxon_date_time.plus({ hours: 7 }).toJSDate()
        return js_date
    }
    function updateAction(action){
        
        //*check this number in table ReferenceValue in b-connect
        const BOOKED_STATUS = 822 // booked status
        const CANCEL_STATUS = 823 // cancel status
        const RESCHEDULE_STATUS = 4532 // reschedule status
        const CONFIRM_STATUS = 1501 // confirm status
        if(action === 'Cancel') return CANCEL_STATUS;
        if(action === 'Book') return BOOKED_STATUS;
        return CONFIRM_STATUS ;
           
    }
}


