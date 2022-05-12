const express = require("express");

const makeCallback = require("../library/express-callbacks");
//const orderRouter = require('./order.router')
const packageRouter = express.Router({ mergeParams: true });
const { getPackage,
        getPackageID,
        deletePackage,
        postPackage,
        patchPackage
      } = require("../Package/controllers");

packageRouter.get('',makeCallback(getPackage))
packageRouter.get('/:package_id', makeCallback(getPackageID));
packageRouter.delete('/:package_id', makeCallback(deletePackage));
packageRouter.post('/new',makeCallback(postPackage))
packageRouter.patch(`/:package_id`,makeCallback(patchPackage))
//packageRouter.use(`/:$package_id/order`,orderRouter)
module.exports = packageRouter;
