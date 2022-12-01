module.exports = function makeGetWorkingHour({listWorkingHour}) {
    return async function getWorkingHour(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const working = await listWorkingHour({
            params : httpRequest.params
          });
        return {
          headers,
          statusCode: 200,
          body: working,
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