module.exports = function makeListNotification({NotificationAccessDB,makeGetNotification}){
    return async function listNotification({params} = {}){        
        if(!params){
            throw new Error('You must supply a package id.')
        }

        const NotificationEntity = makeGetNotification({
          user_uid: params.user_uid
        })
        
        const Notification = await NotificationAccessDB.findByUserID({NotificationEntity})
        return Notification  
      }     
    }