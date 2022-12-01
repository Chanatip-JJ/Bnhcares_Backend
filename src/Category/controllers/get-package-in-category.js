module.exports = function makeGetPackageInCategory({listPackageInCategory}) {
  return async function getPackageInCategory(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const getPackageInCategory = await listPackageInCategory({
          query : httpRequest.query
        });
      return {
        headers,
        statusCode: 200,
        body: getPackageInCategory,
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
