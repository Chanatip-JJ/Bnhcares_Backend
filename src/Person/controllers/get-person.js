module.exports = function makeGetPerson({listPerson}) {
  return async function getPerson(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const getPerson = await listPerson({
          query : httpRequest.query
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
