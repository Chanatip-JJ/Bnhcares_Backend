module.exports = function makeGetCart({listCart}) {
    return async function getCart(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        
        const getCart = await listCart({
            params : httpRequest.params
          });
        return {
          headers,
          statusCode: 200,
          body: getCart,
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