module.exports = function makeRemoveCart({removeCart}) {
    return async function deleteCart(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const toDelete = httpRequest.body
        const deleted = await removeCart({toDelete});
        return {
          headers,
          statusCode: deleted.isSuccess === true ? 200 : 400,
          body: { deleted },
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