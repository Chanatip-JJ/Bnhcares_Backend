module.exports = function makeRemovePackage({removePackage}) {
    return async function deletePackage(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const deleted = await removePackage({
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