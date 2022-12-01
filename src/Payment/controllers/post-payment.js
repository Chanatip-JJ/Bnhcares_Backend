module.exports = function makePostPayment({addPayment}) {
    return async function postPayment(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {        
        const paymentDetail = httpRequest.body
        const posted = await addPayment({
            paymentDetail
          });
        return {
          headers,
          statusCode: 201,
          body: { posted },
          URLpath: `https://bnhcares.bnhhospital.com/#/thankyou/${posted}`
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