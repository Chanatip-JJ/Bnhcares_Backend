module.exports = function makeRemoveCategory({removeCategory}) {
    return async function deleteCategory(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const deleted = await removeCategory({
            params : httpRequest.params
          });
        return {
          headers,
          statusCode: deleted.isSuccess === true ? 200 : 404,
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