module.exports = function makeListCareprovider({PackageCareProviderAccessDB,makeGetPackageCareProvider}){
    return async function listCareproviderID({query} = {}){
        const Entity = makeGetPackageCareProvider(query)
        const careprovider =  await PackageCareProviderAccessDB.findAll({Entity})
        return careprovider        
    }
}