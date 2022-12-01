module.exports = function makePostRegister({userRegister}){
    return async function postRegister(httpRequest){
        const headers = {
            "Content-Type": "application/json",
        };
        try{
            const userDetail = httpRequest.body
            const posted = await userRegister({
                userDetail
            });
            return {
                headers,
                statusCode: 201,
                body:  posted 
            };
        } catch (e) {
            console.log(e)
            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 400,
                body: e.message,
            }
        }
    }
}