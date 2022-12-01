module.exports = function makeGetDoctorAppointmentManagementByCareprovider({listDoctorAppointmentManagementByCareprovider}) {
    return async function getDoctorAppointmentManagementByCareprovider(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        
        const DoctorAppointmentManagement = await listDoctorAppointmentManagementByCareprovider({
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