module.exports = function makeListBookingID({BookingIDAccessDB}){
    return async function listBookingID({params}){          
        const BookingUID = params.booking_uid
        const Booking = await BookingIDAccessDB.findByBookingUID({BookingUID})
        return Booking      
    }
}