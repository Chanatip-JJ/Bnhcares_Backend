module.exports = function makeGetPackageCareproviderID({listCareproviderID}) {
    return async function getPackageCareproviderID(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const getCareprovider = await listCareproviderID({
            params : httpRequest.params
          });
        return {
          headers,
          statusCode: 200,
          body: getCareprovider,
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