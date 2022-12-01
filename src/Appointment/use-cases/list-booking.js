module.exports = function makeListBooking({GetBookingAccessDB,makeGetBooking}){
    return async function listBooking({BookedDetail}){          
        const BookingDetail = makeGetBooking(BookedDetail)
        
        const existedBooking = await GetBookingAccessDB.findByPatientID({BookingDetail})
        return existedBooking       
    }
}