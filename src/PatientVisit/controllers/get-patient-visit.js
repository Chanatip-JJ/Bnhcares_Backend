module.exports = function makeGetPatientVisit({listPatientVisit}) {
  return async function getPatientVisit(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const getPatientVisit = await listPatientVisit({
          query : httpRequest.query,
          params : httpRequest.params
        });
      return {
        headers,
        statusCode: 200,
        body: getPatientVisit,
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
