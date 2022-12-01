module.exports = function makeGetCategory({listCategory}) {
  return async function getCategory(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const getCategory = await listCategory({
          query : httpRequest.query
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
