module.exports = function makeRemoveClearCart({removeCartAll}) {
    return async function deleteClearCart(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const clearCart = await removeCartAll({
            params : httpRequest.params
          });
        return {
          headers,
          statusCode: clearCart.isSuccess === true ? 200 : 400,
          body: { clearCart },
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