module.exports = function makeGetDoctorAppointmentManagementByLocation({listDoctorAppointmentManagementByLocation}) {
    return async function getDoctorAppointmentManagementByLocation(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const DoctorAppointmentManagement = await listDoctorAppointmentManagementByLocation({
            params : httpRequest.params
          });
        return {
          headers,
          statusCode: 200,
          body: DoctorAppointmentManagement,
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