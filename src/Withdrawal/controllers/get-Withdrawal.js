module.exports = function makeGetWithdrawal({listWithdrawal}) {
    return async function GetWithdrawal(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const withdrawal = await listWithdrawal({
            params : httpRequest.params
          });
        return {
          headers,
          statusCode: 200,
          body: withdrawal,
        };
      } catch (e) {
        return {
          headers,
          statusCode: 400,
          body: e.message,
        };
      }
    };
  };