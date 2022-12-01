module.exports = function makeGetInvoice({listInvoice}) {
    return async function getInvoice(httpRequest) {
      try {
        const getInvoice = await listInvoice({
          params : httpRequest.params
        });
        const headers = {
          "Content-Type": "application/pdf",
          "Content-Disposition":`attachment; filename= ${getInvoice.filename}.pdf`
        };
        return {
          headers,
          statusCode: 200,
          body: getInvoice.path,
        };
      } catch (e) {
        const headers = {
          "Content-Type": "application/json"
        };
        return {
          headers,
          statusCode: 400,
          body: e.message,
        };
      }
    };
  };