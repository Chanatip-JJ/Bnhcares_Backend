module.exports = function makeGetSearchPatient({listSearchPatient}) {
    return async function getPatient(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
       
        const getPatient = await listSearchPatient({
            query : httpRequest.query
          });
        return {
          headers,
          statusCode: 200,
          body: getPatient,
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