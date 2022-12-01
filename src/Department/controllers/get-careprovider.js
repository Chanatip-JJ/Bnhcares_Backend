module.exports = function makeGetCareProvider({listCareProvider}) {
    return async function getCareProviderInDepartment(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const getCareProvider = await listCareProvider({
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