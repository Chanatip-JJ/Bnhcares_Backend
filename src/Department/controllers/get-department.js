module.exports = function makeGetDepartment({listDepartment}) {
  return async function getDepartment(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const getDepartment = await listDepartment({
          query : httpRequest.query
        });
      return {
        headers,
        statusCode: 200,
        body: getDepartment,
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
