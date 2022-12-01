module.exports = function makeListAdditionalCareprovider({AdditionalCareproviderAccessDB,makeGetAdditionalCareprovider}){
    return async function listAdditionalCareprovider({params} = {}){        
        if(!params){
            throw new Error('You must supply a location id.')
        }
        
        const AdditionalCareproviderEntity = makeGetAdditionalCareprovider(params)
        
        const AdditionalCareprovider = await AdditionalCareproviderAccessDB.findByID({AdditionalCareproviderEntity})
        

        return AdditionalCareprovider
      }     
    }