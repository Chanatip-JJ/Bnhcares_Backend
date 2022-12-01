module.exports = function makeGetLocation({listLocation}) {
    return async function getLocation(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const location = await listLocation({
            params : httpRequest.params
          });
        return {
          headers,
          statusCode: 200,
          body: location,
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