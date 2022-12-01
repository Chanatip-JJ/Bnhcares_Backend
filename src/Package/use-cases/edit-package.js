module.exports = function makeEditPackage({PackageAccessDB,makePackage,makeGetPackage}){
    return async function editPackage({edit,params} ={}){
        
        // set Package Params before passing through Mssql  
        var PackageEntity = makeGetPackage({
            uid: params.package_id
          })
        // check existing package before update
        const existing = await PackageAccessDB.findById({
            PackageEntity
        })

        // check existing product
        if(!existing){
            throw new RangeError('Package not found.')
        }   
        
        // set Package Params before passing through Mssql 
        var PackageEntity  = makePackage({...existing,...edit})
        await PackageAccessDB.update({PackageEntity})
        
        return  {
            message:'THe Package has successfully been edited'
        }        
    }
}