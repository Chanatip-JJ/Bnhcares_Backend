module.exports = function makeGetOrderDetails({listOrderDetails}) {
  return async function getOrderDetails(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const getOrderDetails = await listOrderDetails({
          query : httpRequest.query
        });
      return {
        headers,
        statusCode: 200,
        body: getOrderDetails,
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
