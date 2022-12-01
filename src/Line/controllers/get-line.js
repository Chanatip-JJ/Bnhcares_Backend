module.exports = function makePostLineLogin({LineLogin}){
    return async function postLineLogin(httpRequest){
        const headers = {
            "Content-Type" : "application/json",
        };
        
        try {
            const Login = await LineLogin({
                body : httpRequest.body
            });
            return {
                headers,
                cookies: Login,
                statusCode: 200,
                body: Login,
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