module.exports = function makePostPerson({addPerson}) {
    return async function postPerson(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const personDetail = httpRequest.body
        const posted = await addPerson({
            personDetail
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