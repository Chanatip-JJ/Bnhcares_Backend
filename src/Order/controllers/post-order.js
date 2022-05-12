module.exports = function makePostOrders({addOrder}) {
    return async function postOrders(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const Order = httpRequest.body
        const posted = await addOrder({Order});
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