module.exports = function makeGetPayment({listPayment}) {
  return async function getPayment(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const getPayment = await listPayment({
          query : httpRequest.query
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
