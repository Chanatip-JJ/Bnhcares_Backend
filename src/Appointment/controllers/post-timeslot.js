module.exports = function makeGetTimeSlot({listTimeSlot}) {
  return async function getAvailableSlot(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const DateDetail = httpRequest.body
      const getTimeSlot = await listTimeSlot({
               DateDetail
        });
      return {
        headers,
        statusCode: 200,
        body: getTimeSlot,
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
