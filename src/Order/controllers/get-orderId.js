module.exports = function makeGetOrderID({listOrderID}) {
    return async function getOrderId(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const getOrder = await listOrderID({
            params : httpRequest.params
          });
        return {
          headers,
          statusCode: 200,
          body: getOrder,
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