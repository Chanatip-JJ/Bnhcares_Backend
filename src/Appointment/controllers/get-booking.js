module.exports = function makeGetBooking({listBooking}) {
  return async function getBooking(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const BookedDetail = httpRequest.body
      const existedBooking = await listBooking({
               BookedDetail
        });
      
      return {
        headers,
        statusCode: 200,
        body: existedBooking,
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
