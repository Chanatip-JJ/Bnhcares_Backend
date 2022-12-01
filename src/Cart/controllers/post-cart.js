module.exports = function makePostCart({addCart}) {
    return async function postCart(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const cartDetail = httpRequest.body
        const posted = await addCart({
              cartDetail
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