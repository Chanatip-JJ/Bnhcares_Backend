module.exports = function makeGetSession({listSession}) {
  return async function getSession(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const session = await listSession({
              params: httpRequest.params
        });
      
      return {
        headers,
        statusCode: 200,
        body: session,
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
