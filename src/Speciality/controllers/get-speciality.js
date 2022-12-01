module.exports = function makeGetSpeciality({listSpeciality}) {
  return async function getSpeciality(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const getSpeciality = await listSpeciality({
          query : httpRequest.query
        });
        console.log(getSpeciality)
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
