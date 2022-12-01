module.exports = function makeGetBanner({listBanner}) {
  return async function getBanner(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const getBanner = await listBanner({
          query : httpRequest.query
        });
      return {
        headers,
        statusCode: 200,
        body: getBanner,
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
