const express = require("express");

const makeCallback = require("../library/express-callbacks");
const orderRouter = require('./order.router')
const personRouter = express.Router({ mergeParams: true });
const { getPerson,
        getPersonID,
        postPerson,
        patchPerson
      } = require("../Person/controllers");

personRouter.get('',makeCallback(getPerson))
personRouter.get('/:person_id', makeCallback(getPersonID));
personRouter.post('/new',makeCallback(postPerson))
personRouter.patch(`/:person_id`,makeCallback(patchPerson))
personRouter.use(`/:$person_id/order`,orderRouter)
module.exports = personRouter;
