module.exports = function makeGetCareProviderID({listCareProviderID}) {
    return async function getCareProviderId(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const getCareProvider = await listCareProviderID({
            params : httpRequest.params
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