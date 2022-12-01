module.exports = function makeGetPatientVisitResultDownload({PDFPatientVisitResult}) {
    return async function getPatientVisitResultDownload(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const getResultDownload = await PDFPatientVisitResult({
            query : httpRequest.query,
            params : httpRequest.params
          });
        return {
          headers,
          statusCode: 200,
          body: getResultDownload,
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