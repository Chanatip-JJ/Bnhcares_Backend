module.exports = function makeRemovePackage({PackageAccessDB,makeGetPackage}){
    return async function removePackage({params} = {}){
        if(!params){
            throw new Error('You must supply a package id.')
        }
        
        var PackageEntity = makeGetPackage({ 
            uid: params.package_id 
        })

        const packageToDelete = await PackageAccessDB.findById({PackageEntity})
        
        if(!packageToDelete || packageToDelete === undefined) {
            return {
                isSuccess: false,
                message:'Package not found, nothing to delete'
            }
        }

        if(alreadyDeleted(packageToDelete)){
            return {
                isSuccess: false,
                message:'This package already was deleted'
            }
        }

        // set status as inactive
        var PackageEntity = makeGetPackage({ 
            uid: params.package_id,
            status:'inactive' 
        })

        // change status
        await PackageAccessDB.remove({ PackageEntity })

        return {
            isSuccess: true,
            message:'The package successfully deleted'
        }
    }
        //whether requested package was already deleted . 
        function alreadyDeleted(packageToDelete){
            if(packageToDelete.status == 'inactive'){
                return true;
            }
            return false;
        }


}