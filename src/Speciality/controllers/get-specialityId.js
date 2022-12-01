module.exports = function makeGetSpecialityID({listSpecialityID}) {
    return async function getSpecialityId(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const getSpeciality = await listSpecialityID({
            params : httpRequest.params
          });
        return {
          headers,
          statusCode: 200,
          body: getSpeciality,
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