module.exports = function makeGetNotification({listNotification}) {
    return async function getNotification(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const notification = await listNotification({
            params : httpRequest.params
          });
        return {
          headers,
          statusCode: 200,
          body: notification,
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