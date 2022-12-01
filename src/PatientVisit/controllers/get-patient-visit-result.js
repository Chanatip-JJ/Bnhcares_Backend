module.exports = function makeGetPatientVisitResult({listPatientVisitResult}) {
    return async function getPatientVisitResult(httpRequest) {
      const headers = {
        "Content-Type": "application/json"
      };
      try {
        const getResult = await listPatientVisitResult({
            query : httpRequest.query,
            params : httpRequest.params
          });
        return {
          headers,
          statusCode: 200,
          body: getResult,
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