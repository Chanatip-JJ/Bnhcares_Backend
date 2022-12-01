module.exports = function makeGetPersonByEmail({listPersonByEmail}) {
    return async function getPersonByEmail(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const getPerson = await listPersonByEmail({
            params : httpRequest.params
          });
        return {
          headers,
          statusCode: 200,
          body: getPerson,
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