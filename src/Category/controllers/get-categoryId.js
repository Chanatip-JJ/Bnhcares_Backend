module.exports = function makeGetCategoryID({listCategoryID}) {
    return async function getCategoryId(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const getCategory = await listCategoryID({
            params : httpRequest.params
          });
        return {
          headers,
          statusCode: 200,
          body: getCategory,
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