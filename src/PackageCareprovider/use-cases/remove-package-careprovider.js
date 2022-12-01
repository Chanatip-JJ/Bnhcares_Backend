module.exports = function makeRemovePackageCareprovider({PackageCareProviderAccessDB,makeGetPackageCareProvider}){
    return async function removePackageCareprovider({params} = {}){
        if(!params){
            throw new Error('You must supply uid.')
        }
        const Entity = makeGetPackageCareProvider({ 
            uid: params.uid 
        })
        
        
        await PackageCareProviderAccessDB.remove({ Entity })
        
        return {
            isSucess: true
        }
    }
}