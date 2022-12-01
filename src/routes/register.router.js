const express = require('express')
const makeCallback = require('../helpers/express-callbacks')
const registerRouter = express.Router({mergeParams: true})
const { postRegister,getLine } = require('../Register/controllers')


/**
   * @openapi
   *  tags: 
   *    name: Careprovider
   *    description: The CareProvider managing API
   *     
   */

/**
   * @openapi
   * '/register/{Channel}/{HN}':
   *  get:
   *     tags: [Register]
   *     summary: Return a record of patient which are valid in Database.
   *     parameters:
   *     - in: path
   *       name: Channel
   *       schema:
   *          enum: [BNHCares,Line]    
   *          type: string 
   *       description: Channel which user accesses. 
   *       required: true
   *     - in: path
   *       name: HN
   *       schema:   
   *          type: string 
   *       description: hostipal number. 
   *       required: true
   *     responses:
   *       200:
   *         description: Success
   */
registerRouter.get('/:Channel/:HN',makeCallback(getLine))


registerRouter.post('', makeCallback(postRegister))




module.exports = registerRouter