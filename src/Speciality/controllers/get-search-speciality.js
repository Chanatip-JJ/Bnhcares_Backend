module.exports = function makeGetSpeciality({searchSpeciality}){
    return async function getSpeciality(httpRequest){
        const headers = {
            "Content-Type": "application/json"
        }
        try{
            const getSpeciality = await searchSpeciality({
                query : httpRequest.query
            })
            return {
                headers,
                statusCode: 200,
                body: getSpeciality
            }
        } catch (e){
            return {
                headers,
                statusCode: 400,
                body: e.message
            }
        }
    }
}