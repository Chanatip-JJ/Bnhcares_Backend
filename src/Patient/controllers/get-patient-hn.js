module.exports = function makeGetPatientHN({listPatient}) {
    return async function getPatientHN(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const getPatient = await listPatient({
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