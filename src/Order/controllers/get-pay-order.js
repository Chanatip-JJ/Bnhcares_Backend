module.exports = function makePayOrder({payOrderID}) {
    return async function getPayOrder(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const paidOrder = await payOrderID({
            params : httpRequest.params
          });

        return {
          headers,
          statusCode: 200,
          body: paidOrder,
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