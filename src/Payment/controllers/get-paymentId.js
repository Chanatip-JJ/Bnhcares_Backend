module.exports = function makeGetPaymentID({listPaymentID}) {
    return async function getPaymentId(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const getPayment = await listPaymentID({
            params : httpRequest.params
          });
        return {
          headers,
          statusCode: 200,
          body: getPayment,
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