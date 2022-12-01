module.exports = function makeAddNotification({addNotification}) {
    return async function postNotification(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const detail = httpRequest.body
        const posted = await addNotification({
            detail
          });
        return {
          headers,
          statusCode: 201,
          body: { posted },
        };
      } catch (e) {
        return {
          headers:{
            'Content-Type': 'application/json'
          },
          statusCode: 400,
          body: e.message,
        };
      }
    };
  };