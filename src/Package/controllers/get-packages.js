module.exports = function makeGetPackages({listPackages}) {
  return async function getPackages(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const getPackage = await listPackages({
          query : httpRequest.query
        });
      return {
        headers,
        statusCode: 200,
        body: getPackage,
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
