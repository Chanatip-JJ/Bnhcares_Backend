module.exports = function makePatchPackageCareprovider({editPackageCareprovider}) {
    return async function patchPackageCareprovider(httpRequest) {
      try {
        const edit  = httpRequest.body
        const toEdit = {
            edit    
        }
        const patched = await editPackageCareprovider(toEdit);
        return {
          headers:{
            'Content-Type': 'application/json',
            'Last-Modified': new Date().toLocaleString("en-US",{timeZone:"Asia/Bangkok"})
          },
          statusCode: 200,
          body: { patched },
        };
      } catch (e) {
        if (e.name === 'RangeError') {
            return {
              headers: {
                'Content-Type': 'application/json'
              },
              statusCode: 404,
              body: {
                error: e.message
              }
            }
          }
          return {
            headers: {
              'Content-Type': 'application/json'
            },
            statusCode: 400,
            body: {
              error: e.message
            }
          }
      }
    };
  };