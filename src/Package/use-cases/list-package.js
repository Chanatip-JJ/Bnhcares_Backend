module.exports = function makeListPackage({PackageAccessDB,makeGetPackage}){
    return async function listPackages({query} = {}){
        const PackageEntity = makeGetPackage(query)
        const package =  await PackageAccessDB.findAll({PackageEntity})
        
        return package
             
    }
}