module.exports = function makePatchOrders({editOrder}) {
    return async function patchOrders(httpRequest) {
      try {
        const edit  = httpRequest.body
        const toEdit = {
            params:httpRequest.params,
            edit    
        }
        const patched = await editOrder(toEdit);
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