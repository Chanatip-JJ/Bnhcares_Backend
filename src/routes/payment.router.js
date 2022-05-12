const express = require("express");

const makeCallback = require("../library/express-callbacks");
const paymentRouter = express.Router({ mergeParams: true });
const { getPayment,
        getPaymentID,
        postPayment,
      } = require("../Payment/controllers");

paymentRouter.get('',makeCallback(getPayment))
paymentRouter.get('/:payment_id', makeCallback(getPaymentID));
paymentRouter.post('/new',makeCallback(postPayment))


module.exports = paymentRouter;
