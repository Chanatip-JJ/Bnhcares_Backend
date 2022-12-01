module.exports = function makeListCareProvider({CareProviderAccessDB,makeGetCareProvider}){
    return async function listCareProviders({query} = {}){
        const CareProviderEntity = makeGetCareProvider(query)
        const CareProvider =  await CareProviderAccessDB.findAll({CareProviderEntity})
        return CareProvider         
    }
}