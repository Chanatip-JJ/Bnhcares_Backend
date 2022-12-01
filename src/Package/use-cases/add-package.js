module.exports = function makeAddPackage({PackageAccessDB,makePackage}){
    return async function addPackage({packageDetail}){
        const PackageEntity = makePackage(packageDetail)
        
        await PackageAccessDB.insert({PackageEntity})
        return {
            message:'THe Package has successfully been added'
        }  
    }
}