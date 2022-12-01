module.exports = function makeGetPerson({checkLine}) {
  return async function getPerson(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const detail = await checkLine({
          params : httpRequest.params
        });
      return {
        headers,
        statusCode: 200,
        body: detail,
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
