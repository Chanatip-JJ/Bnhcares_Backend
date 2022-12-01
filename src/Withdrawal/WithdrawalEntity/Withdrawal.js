//* swagger documentation --> Package  as below
/**
 * @swagger
 * components:
 *   schemas:
 *     withdrawal:
 *       type: object
 *       properties:
 *          uid:
 *            type: integer      
 *          careprovider_uid:
 *            type: integer
 *          location_uid:
 *            type: integer 
 *          start_date:
 *            type: integer
 *            format: date-time
 *            example: "2022-09-30"
 *            pattern: "YYYY-MM-DD"  
 *          end_date:
 *            type: integer
 *            format: date-time
 *            example: "2022-09-30"
 *            pattern: "YYYY-MM-DD"
 *          start_time:
 *            type: string
 *            example: "08:00:00"
 *          end_time:
 *            type: string
 *            example: "17:00:00"
 *          selected_date:
 *            type: string
 *            format: date-time
 *            example: "2022-09-30"
 *            pattern: "YYYY-MM-DD" 
 *          status:
 *            type: string 
 * 
 */
 module.exports = function buildWithdrawal({}) {
    return function makeWithdrawal({
         uid, 
         careprovider_uid ,
		 location_uid ,
		 start_date ,
		 end_date ,
		 start_time ,
		 end_time,
         selected_date,
         status, 
} = {}) {
    
    return Object.freeze({
        getUID : () => uid || null,
        getCareprovider_uid : () => careprovider_uid || null,
        getLocation_uid: () => location_uid || null,
        getStartDate : () => start_date || null,
        getEndDate : () => end_date || null,
        getStartTime : () => start_time || null,
        getEndTime:() => end_time || null,
        getSelectedDate:() => selected_date || null,
        getStatus : () => status || null
    })
}
}

