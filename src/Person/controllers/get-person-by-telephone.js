module.exports = function makeGetPersonByTelephone({listPersonByTelephone}) {
    return async function getPersonByTelephone(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const getPerson = await listPersonByTelephone({
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