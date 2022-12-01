module.exports = function makeGetNewPatient({newPatient}){
    return async function getNewPatient(httpRequest){
        const headers = {
            "Content-Type" : "application/json",
        };
        try {
            const detail = await newPatient({
                params : httpRequest.params
            });
            return {
                headers,
                statusCode: 200,
                body: detail,
            };
        } catch (e) {
            return {
                headers,
                statusCode: 400,
                body: e.message,
            }
        }
    }
}