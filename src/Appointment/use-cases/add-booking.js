
module.exports = function makeAddBooking({makeBooking,BookingAccessDB,OrderDetailAccessDB,makeGetOrderDetail,BookingLogAccessDB,makeLogBooking,makeOrderDetail}){
    return async function addBooking({BookingDetail}){
        const BookingEntity = makeBooking(BookingDetail)
    
        //save booking in SQL 
        const Booking = await BookingAccessDB.submit({BookingEntity})
        
        // //? have to record BookingID with OrderID
        // //* if BookingID = 0 , not success and return
        if(!Booking[0]){
            throw new Error('Booking not success, please make appointment again.')
        }

        //const Booking = [{BookingID:1}]
        
        // if booking via packages
        if(BookingDetail.ORDDT_NO !== 0){
            //*if success  return update bookingID in order detail and return booking details
            var OrderDetailEntity = makeGetOrderDetail({ORDDT_NO :BookingDetail.ORDDT_NO, ORDDT_LINENO: BookingDetail.ORDDT_LINENO})  
            const existed = await OrderDetailAccessDB.findById({OrderDetailEntity})
            const updated = {...existed[0],          
                          ORDDT_BOOK_ID:Booking[0].BookingID,         
                        }       
            var OrderDetailEntity = makeOrderDetail(updated)
            await OrderDetailAccessDB.update({OrderDetailEntity})
        }
        
         //logging  booking 
         const booked = {...BookingDetail,...Booking[0],BookStatus:'Book'}
         const LogBooking = makeLogBooking(booked)
         await BookingLogAccessDB.insert({LogBooking})
        return Booking
    }
}