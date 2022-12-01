module.exports = function makeGetOTP({sendOTP}){
    return async function getOTP(httpRequest){
        const headers = {
            "Content-Type" : "application/json",
        };
        try {
            const OTPrespond = await sendOTP({
                query : httpRequest.query
            });
            return {
                headers,
                statusCode: 200,
                body: {OTPrespond},
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