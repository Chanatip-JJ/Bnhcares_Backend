module.exports = function makeGetUserID({listOrderWithUserId}) {
    return async function getUserId(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const getOrder = await listOrderWithUserId({
            params : httpRequest.params
          });
        return {
          headers,
          statusCode: 200,
          body: getOrder,
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