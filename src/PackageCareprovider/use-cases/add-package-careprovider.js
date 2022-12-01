module.exports = function makeAddPackage({PackageCareProviderAccessDB,makePackageCareProvider}){
    return async function addPackage({Detail}){
        
        const Entity = makePackageCareProvider(Detail)

        await PackageCareProviderAccessDB.insert({Entity})
        return {
            message:'THe Package has successfully been added'
        }  
    }
}