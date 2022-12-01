module.exports = function makeEditAdditionalCareprovider({AdditionalCareproviderAccessDB,makeAdditionalCareprovider,makeGetAdditionalCareprovider}){
    return async function editAdditionalCareprovider({edit,params} ={}){
        // set Params before passing through Mssql  
        var AdditionalCareproviderEntity = makeGetAdditionalCareprovider({
            uid: params.uid
          })
        // check existing data before update
        const existing = await AdditionalCareproviderAccessDB.findByID({
            AdditionalCareproviderEntity
        })
        
        // check existing 
        if(!existing){
            throw new RangeError('AdditionalCareprovider not found.')
        }   
        // set Params before passing through Mssql
        var AdditionalCareproviderEntity  = makeAdditionalCareprovider({...existing[0],...edit})
        await AdditionalCareproviderAccessDB.update({AdditionalCareproviderEntity})
        
        return  {
            message:'The AdditionalCareprovider has successfully been edited'
        }        
    }
}