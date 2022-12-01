//* swagger documentation --> Package  as below
/**
 * @swagger
 * components:
 *   schemas:
 *     Notification:
 *       type: object
 *       properties:
 *          uid:
 *            type: integer      
 *          user_uid:
 *            type: integer
 *          campaign_name:
 *            type: string  
 *          topic:
 *            type: string   
 *          message:
 *            type: string
 *          status:
 *            type: string 
 *          send_timestamp:
 *            type: string
 *            format: date-time   
 *          read_timestamp:
 *            type: string
 *            format: date-time    
 *          expire_date:
 *            type: string
 *            format: date-time     
 */
 module.exports = function buildNotification({validator,DateTime,FixedOffsetZone}) {
    return function makeGetNotification({
        uid,
        user_uid ,
        campaign_name ,
        topic ,
        message ,
        status ,
        send_timestamp ,
        read_timestamp ,
        expire_date 
} = {}) {
    
    const adaptSendTimeStamp = adaptDate(send_timestamp)
    const adaptReadTimeStamp = adaptDate(read_timestamp)
    const adaptExpireDate = adaptDate(expire_date)

    return Object.freeze({
        getUID : () => uid || null,
        getUser_uid : () => user_uid || null,
        getCampaign_name : () => campaign_name || null,
        getTopic : () => topic || null,
        getMessage : () => message || null,
        getStatus : () => status || null,
        getSend_timestamp : () => adaptSendTimeStamp || null,
        getRead_timestamp : () => adaptReadTimeStamp || null,
        getExpire_date : () => adaptExpireDate || null
    })
}
    function adaptDate(Date){
        if(!Date) return null;
        const luxon_date = DateTime.fromISO(Date).setZone(FixedOffsetZone.parseSpecifier("GMT+7")).startOf("day");
        const JS_Date = luxon_date.plus({ hours: 7 }).toJSDate();
        return JS_Date;
    }
}

