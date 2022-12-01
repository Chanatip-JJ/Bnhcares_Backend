const express = require('express')
const makeCallback = require('../helpers/express-callbacks')
const LineRouter = express.Router({mergeParams: true})
const {postLineLogin} = require('../Line/controllers')


//* swagger tags
/**
   * @openapi
   *  tags: 
   *    name: Line
   *    description: The Line managing API   
   */

//* swagger post method
/**
   * @openapi
   * '/line':
   *  post:
   *     tags: [Line]
   *     summary: Line 
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/Line'
   *     responses:
   *      200:
   *        description: Success
   *      409:
   *        description: Conflict
   *      400:
   *        description: Not found    
   *    
   */
LineRouter.post('',makeCallback(postLineLogin))


module.exports = LineRouter