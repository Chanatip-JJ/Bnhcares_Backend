module.exports = function makePostCategory({addCategory}) {
    return async function postCategory(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const CategoryDetail = httpRequest.body
        const posted = await addCategory({
            CategoryDetail
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