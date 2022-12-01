
/**
 * @swagger
 * components:
 *   schemas:
 *     LogBooking:
 *       type: object
 *       properties:
 *          CareproviderUID:
 *            type: integer
 *            example: 1882  
 *          PatientUID:
 *            type: integer
 *          LocationUID:
 *            type: integer
 *            example: 61  
 *          SlotDefinitionUID:
 *            type: integer
 *          UserId:
 *            type: integer
 */
 
module.exports = function buildLogBooking() {
        return function makeLogBooking({
                 BookingID,   
                 CareproviderUID,
                 PatientUID,
                 LocationUID,
                 SlotDefinitionUID,
                 UserId,
                 BookStatus                 
                } = {}) {
                    
        return Object.freeze({
            getBookingID:() => BookingID, 
            getCareproviderUID  :() => CareproviderUID,  
            getPatientUID  :() => PatientUID,  
            getLocationUID :() => LocationUID, 
            getSlotDefinitionUID :() => SlotDefinitionUID,
            getUserId :() =>  UserId,
            getBookStatus: () => BookStatus
        })
    }
}


