module.exports = function makeGetPackageCareproviderID({PackageCareProviderAccessDB,makeGetPackageCareProvider}){
    return async function getPackageCareproviderID({params} = {}){        
        if(!params){
            throw new Error('You must supply a package id.')
        }
        console.log(params)
        const Entity = makeGetPackageCareProvider({ package_uid: params.package_id })
        
        const Careprovider = await PackageCareProviderAccessDB.findById({Entity})
      
        return Careprovider  
      }     
    }