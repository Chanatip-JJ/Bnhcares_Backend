module.exports = function makeGetPersonID({listPersonID}) {
    return async function getPersonId(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const getPerson = await listPersonID({
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