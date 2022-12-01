module.exports = function makePostBooking({addBooking}) {
  return async function postBooking(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const BookingDetail = httpRequest.body
      const posted = await addBooking({
              BookingDetail
        });
      
      return {
        headers,
        statusCode: 200,
        body: posted,
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
