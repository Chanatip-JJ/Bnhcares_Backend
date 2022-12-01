module.exports = function makePostForgetPassword({forgetPassword}){
    return async function postForgetPassword(httpRequest){
        const headers = {
            "Content-Type" : "application/json",
        };
        try {
            const getUser = await forgetPassword({
                body : httpRequest.body
            });
            return {
                headers,
                statusCode: 200,
                body: getUser
            };
        } catch (e) {
            return {
                headers,
                statusCode: 400,
                body: e.message
            }
        }
    }
}