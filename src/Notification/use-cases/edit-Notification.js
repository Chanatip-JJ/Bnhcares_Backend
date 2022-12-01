module.exports = function makeEditNotification({NotificationAccessDB,makeNotification,makeGetNotification}){
    return async function editNotification({edit,params} ={}){
        
        // set Params before passing through Mssql  
        var NotificationEntity = makeGetNotification({
            uid: params.uid
          })
        // check existing data before update
        const existing = await NotificationAccessDB.findByID({
            NotificationEntity
        })
        console.log(existing)
        // check existing 
        if(!existing){
            throw new RangeError('Package not found.')
        }   
        // set Params before passing through Mssql
        var NotificationEntity  = makeNotification({...existing,...edit})
        await NotificationAccessDB.update({NotificationEntity})
        
        return  {
            message:'THe Package has successfully been edited'
        }        
    }
}