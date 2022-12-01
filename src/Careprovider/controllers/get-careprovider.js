module.exports = function makeGetCareProvider({listCareProvider}) {
  return async function getCareProvider(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const getCareProvider = await listCareProvider({
          query : httpRequest.query
        });
      return {
        headers,
        statusCode: 200,
        body: getCareProvider,
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
