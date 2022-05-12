module.exports = function makeGetOrders({listOrders}) {
  return async function getOrders(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const getOrder = await listOrders({
          query : httpRequest.query
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
