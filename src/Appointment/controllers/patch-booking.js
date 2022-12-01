module.exports = function makePatchBooking({updateBooking}) {
  return async function patchBooking(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const BookingDetail = httpRequest.body
      const edited = await updateBooking({
              BookingDetail
        });
      
      return {
        headers,
        statusCode: 200,
        body: edited,
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
