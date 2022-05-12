const {listPayment,
      listPaymentID,
      addPayment,
      } = require('../use-cases');
      
const makeGetPayment = require('./get-payment');
const makeGetPaymentID = require('./get-paymentId')
const makeAddPayment =require('./post-payment')



const getPayment = makeGetPayment({listPayment});
const getPaymentID = makeGetPaymentID({listPaymentID});
const postPayment = makeAddPayment({addPayment})


module.exports = {
  getPayment,
  getPaymentID,
  postPayment,
};

