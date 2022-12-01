module.exports = function makeSearchCareProvider({listSearchCareProvider}){
    return async function searchCareProvider(httpRequest){
        const headers = {
            "Content-Type": "application/json",
          };
        try{
            const query =  httpRequest.query
            const search = await listSearchCareProvider({ query })
            return {
                headers,
                statusCode: 200,
                body: search
            }
        } catch (e) {
            return {
                headers,
                statusCode: 400,
                body: e.message
            }
        }
    }
}