module.exports = function makeGetBookingID({listBookingID}) {
  return async function getBookingID(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      console.log(httpRequest.params)
      const Booking = await listBookingID({
               params : httpRequest.params
        });
      return {
        headers,
        statusCode: 200,
        body: Booking,
      };
    } catch (e) {
      return {
        headers,
        statusCode: 400,
        body: e.message,
      };
    }
  };
};
