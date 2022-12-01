const express = require("express");

const makeCallback = require("../helpers/express-callbacks");

const bannerRouter = express.Router({ mergeParams: true });
const { getBanner } = require("../Banner/controllers");

//* swagger tags
/**
   * @openapi
   *  tags: 
   *    name: Banner
   *    description: The Banner managing API   
   */

//* swagger get method
/**
   * @openapi
   * '/banner':
   *  get:
   *     tags: [Banner]
   *     summary: Return a list of all banner.
   *     responses:
   *       200:
   *         description: Success
   */
 bannerRouter.get('',makeCallback(getBanner))

module.exports = bannerRouter;
