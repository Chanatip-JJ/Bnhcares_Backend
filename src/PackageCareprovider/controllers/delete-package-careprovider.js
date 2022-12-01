module.exports = function makeRemovePackageCareprovider({removePackageCareprovider}) {
    return async function deletePackageCareprovider(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
      
        const deleted = await removePackageCareprovider({
            params : httpRequest.params
          });
        return {
          headers,
          statusCode: deleted.isSuccess === true ? 404 : 200,
          body: { deleted },
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