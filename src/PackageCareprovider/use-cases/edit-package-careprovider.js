module.exports = function makeEditPackage({PackageCareProviderAccessDB,makePackageCareProvider}){
    return async function editPackage({edit} ={}){
        console.log(edit)
        // check existing package before update
        // set Package Params before passing through Mssql 
        var Entity  = makePackageCareProvider(edit)
        await PackageCareProviderAccessDB.update({Entity})
        
        return  {
            message:'THe Package has successfully been edited'
        }        
    }
}