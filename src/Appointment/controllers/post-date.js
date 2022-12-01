module.exports = function makeGetDate({listDate}) {
  return async function getAvailableDate(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const AppointmentMonthYear = httpRequest.body
      const getDate = await listDate({
            AppointmentMonthYear
        });
      
      return {
        headers,
        statusCode: 200,
        body: getDate,
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
