module.exports = function makeListCareProviderID({CareProviderAccessDB,makeGetCareProvider}){
    return async function listCareProvidersId({params} = {}){        
        if(!params){
            throw new Error('You must supply a careprovider id.')
        }
        // params = {person_id:2}
       
        const CareProviderEntity = makeGetCareProvider({
          //! change id column
          uid_bconnect : params.careprovider_id
        })
        const CareProvider = await CareProviderAccessDB.findById({CareProviderEntity})
        
        return CareProvider  
      }     
    }