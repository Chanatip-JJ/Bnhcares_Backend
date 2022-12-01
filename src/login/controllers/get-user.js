module.exports = function makeGetLogin({userLogin}){
    return async function getUser(httpRequest){
        const headers = {
            "Content-Type" : "application/json",
        };
        
        try {
            const getUser = await userLogin({
                body : httpRequest.body
            });
            return {
                headers,
                cookies: getUser,
                statusCode: 200,
                body: getUser,
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