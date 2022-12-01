module.exports = function makeEditCareProvider({CareProviderAccessDB,makeCareProvider,makeGetCareProvider}){
    return async function editCareProvider({edit,params} ={}){
        
        // set CareProvider Params before passing through Mssql  
        var CareProviderEntity = makeGetCareProvider({
            //! change uid column
            uid : params.careprovider_id
          })
        // check existing person before update
        const existing = await CareProviderAccessDB.findById({
            CareProviderEntity
        })

        // check existing product
        if(!existing){
            throw new RangeError('CareProvider not found.')
        }
    
        // set CareProvider Params before passing through Mssql 
        var CareProviderEntity  = makeCareProvider({...existing,...edit})
        await CareProviderAccessDB.update({CareProviderEntity})
        
        return  {
            message:'THe CareProvider has successfully been edited'
        }        
    }
}