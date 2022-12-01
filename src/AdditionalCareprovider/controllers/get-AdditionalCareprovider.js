module.exports = function makeGetAdditionalCareprovider({listAdditionalCareprovider}) {
    return async function GetAdditionalCareprovider(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const additional = await listAdditionalCareprovider({
            params : httpRequest.params
          });
        return {
          headers,
          statusCode: 200,
          body: additional,
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