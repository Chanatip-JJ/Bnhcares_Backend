module.exports = function makePostValidateOTP({validateOTP}) {
    return async function postValidateOTP(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const OTPdetail = httpRequest.body
        const checked = await validateOTP({
                OTPdetail
          });
        return {
          headers,
          statusCode: 201,
          body: checked ,
        };
      } catch (e) {
        
        console.log(e)
        return {
          headers,
          statusCode: 400,
          body: e.message,
        };
      }
    };
  };