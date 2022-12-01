module.exports = function makeGetPatientVisitResultImage({listPatientVisitImage}) {
    return async function getPatientVisitResultImage(httpRequest) {
      const headers = {
        "Content-Type": "text/xml"
      };
      try {
        
        const getImage = await listPatientVisitImage({
            params : httpRequest.params
          });
        return {
          headers,
          statusCode: 200,
          body: getImage,
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