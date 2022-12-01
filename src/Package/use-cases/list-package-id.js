module.exports = function makeListPackageID({PackageAccessDB,makeGetPackage}){
    return async function listPackagesId({params} = {}){        
        if(!params){
            throw new Error('You must supply a package id.')
        }
               
        const PackageEntity = makeGetPackage({
          uid: params.package_id
        })
        const Package = await PackageAccessDB.findById({PackageEntity})
        return Package  
      }     
    }