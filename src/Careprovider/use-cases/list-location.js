module.exports = function makeListCareProviderID({LocationAccessDB}){
    return async function listCareProvidersId({params} = {}){        
        if(!params){
            throw new Error('You must supply a careprovider id.')
        }
        const CareProviderID = params.careprovider_id
        
        const location = await LocationAccessDB.findById({CareProviderID})
        
        return location  
      }     
    }