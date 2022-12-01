module.exports = function  makeAddNotification({NotificationAccessDB,makeNotification}){
    return async function addNotification({detail}){
        const NotificationEntity = makeNotification(detail)
        
        await NotificationAccessDB.insert({NotificationEntity})
        
        return {
            message:'THe Package has successfully been added'
        }  
    }
}