module.exports = function makeAddAdditionalCareprovider({addAdditionalCareprovider}) {
    return async function postAdditionalCareprovider(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const detail = httpRequest.body
        const posted = await addAdditionalCareprovider({
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