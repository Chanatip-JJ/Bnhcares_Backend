module.exports = function makeGetDepartmentID({listDepartmentID}) {
    return async function getDepartmentId(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const getDepartment = await listDepartmentID({
            params : httpRequest.params
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