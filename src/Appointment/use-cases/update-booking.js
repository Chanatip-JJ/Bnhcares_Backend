module.exports = function makeUpdateBooking({makeEditBooking,EditBookingAccessDB,makeLogBooking,BookingLogAccessDB,OrderDetailAccessDB,makeGetOrderDetail,DoctorAppointmentManagementAccessDB}){
    return async function updateBooking({BookingDetail}){
        const {CareproviderUID,LocationUID,action} = BookingDetail

        // const DoctorAppointmentManagementEntity = makeGetDoctorAppointmentManagement({location_uid:LocationUID,careprovider_uid:CareproviderUID})

        // const DoctorAppointmentManagement = await DoctorAppointmentManagementAccessDB.findByCareproviderAndLocation({DoctorAppointmentManagementEntity})

        // const isAllowed =  checkAllowedReschedule(DoctorAppointmentManagement,action)

        // if(!isAllowed){
        //     throw new Error(`This session are not allowed to ${action}.Please contact ${DoctorAppointmentManagement.telephone} to make a further action.`)
        // }

        const BookingEntity = makeEditBooking(BookingDetail)

        const Updated = await EditBookingAccessDB.update({BookingEntity})
    
        //* if BookingID = 0 , not success and return
        //* if reschedule , new booking
        //* Example return => [ { ReturnOut: 4368912 } ]
        if(!Updated[0]){
            throw new Error('Your request fails, please try again')   
        }
        //const NEW_BOOKING_UID = 5555555;//Updated[0].ReturnOut;
        
        //const BookingDetails = {UID : 4454442}
        // //*update new booking or cancel booking
        //  if(BookingDetail.action == 'Reschedule'){       
        //     const NEW_BOOKING_UID = await NewBookingAccessDB.findByparentID({parentID:Updated[0].ReturnOut})
        //     var OrderDetailEntity = makeGetOrderDetail({ORDDT_BOOK_ID:BookingDetail.UID,NEW_BOOKING_ID:NEW_BOOKING_UID.UID})
        //     await OrderDetailAccessDB.updateBookingID({OrderDetailEntity})                
        // }

        if(BookingDetail.action == 'Cancel'){       
            var OrderDetailEntity = makeGetOrderDetail({ORDDT_BOOK_ID:BookingDetail.UID,NEW_BOOKING_ID:null})
            await OrderDetailAccessDB.updateBookingID({OrderDetailEntity})                
         }  

        const edited = {
                        ...BookingDetail,
                        BookingID:BookingDetail.UID,
                        BookStatus:BookingDetail.action
                    }
        // //*logging  booking 
        const LogBooking = makeLogBooking(edited)
        await BookingLogAccessDB.insert({LogBooking})

        return //Updated
    }

    function checkAllowedReschedule({isConfirm,isReschedule,isCancel,action} = {}){
        if(action == 'Confirm') return isConfirm || true
        
        if(action == 'Cancel') return isCancel || true

        //! use 'Book' because parent booking is newly booked,but the child booking is showed the status of 'Reschedule'.  
        if(action == 'Book') return isReschedule || true
    }
}