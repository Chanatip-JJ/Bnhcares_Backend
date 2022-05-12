module.exports = function makePostPackages({addPackage}) {
    return async function postPackages(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const packageDetail = httpRequest.body
        const posted = await addPackage({
            packageDetail
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