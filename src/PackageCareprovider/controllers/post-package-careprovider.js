module.exports = function makeAddPackageCareprovider({addPackageCareprovider}) {
    return async function postCareprovider(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const Detail = httpRequest.body
        const posted = await addPackageCareprovider({
            Detail
          });
        return {
          headers,
          statusCode: 201,
          body: { posted },
        };
      } catch (e) {
        
        console.log(e)
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