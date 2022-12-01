module.exports = function buildNotification({}) {
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
        
        return Object.freeze({
            getUID : () => uid || null,
            getUser_uid : () => user_uid || null,
            getCampaign_name : () => campaign_name || null,
            getTopic : () => topic || null,
            getMessage : () => message || null,
            getStatus : () => status || null,
            getSend_timestamp : () => send_timestamp || null,
            getRead_timestamp : () => read_timestamp || null,
            getExpire_date : () => expire_date || null
        })
    }
}

