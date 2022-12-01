module.exports = function makeGetPackageCareprovider({listCareprovider}) {
  return async function getCareprovider(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const getPackageCareprovider = await listCareprovider({
          query : httpRequest.query
        });
      return {
        headers,
        statusCode: 200,
        body: getPackageCareprovider,
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
