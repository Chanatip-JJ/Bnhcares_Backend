module.exports = function makeSearchCareProvider({CareProviderAccessDB,makeGetCareProvider}){
    return async function listSearchCareProvider({query}= {}){
        
        const CareProviderEntity = makeGetCareProvider(query)
        const CareProvider = await CareProviderAccessDB.search({CareProviderEntity})
        return CareProvider
    }
}