/**
 * @swagger
 * components:
 *   schemas:
 *     GetBooking:
 *       type: object
 *       properties:
 *          patientId:
 *            type: integer
 *            example: 346262  
 *          BookStatus:
 *            type: string
 *            enum: [Booked,Confirmed,Rescheduled,Cancelled]  
 *            example: Booked
 *                       
 */
module.exports = function buildGetBooking({}) {
        return function makeGetBooking({
             patientId,
             BookStatus,
    } = {}) {
        
        if(!patientId || patientId <= 0){
            throw new Error('A patient id must be supplied ')
        }

        if(!BookStatus){
            throw new Error('A book status must be supplied')
        }

        // if(!numberOfmonth || numberOfmonth === 0){
        //     throw new Error('a number of months that are used to search in incoming booking must be supplied')
        // }


        return Object.freeze({
            getPatientID: () =>  patientId,
            getBookStatus:() =>  BookStatus,
            // getNumberOfMonth:() => numberOfmonth
        })
    }
}





