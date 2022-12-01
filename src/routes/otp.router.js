const express = require('express')
const makeCallback = require('../helpers/express-callbacks')
const OTPRouter = express.Router({mergeParams: true})
const {getOTP,postValidateOTP} = require('../otp/controllers')
const rateLimit = require('express-rate-limit')

const requestedOTPlimiter = rateLimit({
   windowMs: 10*60*1000, // 10 min
   max:1,
   message: 'Too many OTP request created from this IP, please try again after 10 minutes',
})


//* swagger tags
/**
   * @openapi
   *  tags: 
   *    name: OTP
   *    description: The OTP managing API   
   */

/**
   * @openapi
   * '/otp':
   *  get:
   *     tags: [OTP]
   *     summary: send OTP
   *     parameters:
   *     - in: query
   *       name: telephone
   *       description: 
   *       type: string
   *     - in: query
   *       name: email
   *       description: 
   *       type: string
   *     responses:
   *      200:
   *        description: Success
   *      409:
   *        description: Conflict
   *      400:
   *        description: Not found
   *    
   */
 OTPRouter.get('',requestedOTPlimiter, makeCallback(getOTP))

/**
   * @openapi
   * '/otp':
   *  post:
   *     tags: [OTP]
   *     summary: validate OTP
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *              $ref: '#/components/schemas/OTP' 
   *     responses:
   *      200:
   *        description: Success
   *      409:
   *        description: Conflict
   *      400:
   *        description: Not found
   *    
   */
 OTPRouter.post('', makeCallback(postValidateOTP))




module.exports = OTPRouter