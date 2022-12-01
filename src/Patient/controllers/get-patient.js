module.exports = function makeGetPatient({listPatientDetail}) {
    return async function getPatient(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const getPatient = await listPatientDetail({
            params : httpRequest.params
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