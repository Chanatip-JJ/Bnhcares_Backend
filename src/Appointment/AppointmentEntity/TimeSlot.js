/**
 * @swagger
 * components:
 *   schemas:
 *     TimeSlot:
 *       type: object
 *       properties:
 *          SelectedDate:
 *            type: date
 *            example: "2017-01-01"
 *            pattern: "YYYY-MM-DD"  
 *          careproviderId:
 *            type: integer
 *          locationId:
 *            type: integer
 */
module.exports = function buildTimeSlot({}) {
        return function makeGetTimeSlot({
             SelectedDate,
             careproviderId,
             locationId
    } = {}) {
        
        return Object.freeze({
            getSelectedDate:() => SelectedDate,
            getCareproviderId: () => careproviderId ,
            getLocationId: () =>  locationId,
        })
    }
}




