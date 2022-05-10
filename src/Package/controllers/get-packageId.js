module.exports = function makeGetPackageID({listPackageID}) {
    return async function getPackageId(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const getPackage = await listPackageID({
            params : httpRequest.params
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