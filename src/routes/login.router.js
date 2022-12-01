const express = require('express')
const makeCallback = require('../helpers/express-callbacks')
const loginRouter = express.Router({mergeParams: true})
const {getUser,patchUser,getNewPatient,postForgetPassword} = require('../login/controllers')


//* swagger tags
/**
   * @openapi
   *  tags: 
   *    name: Login
   *    description: The Login managing API   
   */

/**
   * @openapi
   * paths:
   *  '/login/new-patient/{id}':
   *   get:
   *     tags: [Login]
   *     summary: Return HN and Patient ID.
   *     parameters:
   *     - in: path
   *       name: id
   *       description: Numeric ID of the Login to get
   *       required: true
   *       type: integer 
   *     responses:
   *       200:
   *         description: Success
   *       400:
   *         description: Category not found
   */
 loginRouter.get('/new-patient/:id',makeCallback(getNewPatient))


/**
   * @openapi
   * '/login':
   *  post:
   *     tags: [Login]
   *     summary: edit login detail
   *     requestBody:
   *       content:
   *         application/json:
   *           schema:
   *              type: object
   *              required: true
   *              properties:
   *                 username:
   *                   type: string
   *                 password:
   *                   type: string  
   *     responses:
   *      200:
   *        description: Success
   *      409:
   *        description: Conflict
   *      400:
   *        description: Not found
   *    
   */
loginRouter.post('', makeCallback(getUser))

//* swagger post method
/**
   * @openapi
   * '/login/user/edit':
   *  post:
   *     tags: [Login]
   *     summary: edit login detail
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/Login'
   *     responses:
   *      200:
   *        description: Success
   *      409:
   *        description: Conflict
   *      400:
   *        description: Not found    
   *    
   */
loginRouter.post('/user/edit',makeCallback(patchUser))



//* swagger post method
/**
   * @openapi
   * '/login/user/getPatientUID':
   *  post:
   *     tags: [Login]
   *     summary: get patient uid by HN
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/Login'
   *     responses:
   *      200:
   *        description: Success
   *      409:
   *        description: Conflict
   *      400:
   *        description: Not found    
   *    
   */
 loginRouter.post('/user/getPatientUID',makeCallback(patchUser))


//* swagger post method
/**
   * @openapi
   * '/login/user/forgetPassword':
   *  post:
   *     tags: [Login]
   *     summary: User forget password
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              type: object
   *              properties:
   *                hn:
   *                  type: string
   *                username:
   *                  type: string
   *     responses:
   *      200:
   *        description: Success
   *      409:
   *        description: Conflict
   *      400:
   *        description: Not found    
   *    
   */
 loginRouter.post('/user/forgetPassword',makeCallback(postForgetPassword))



module.exports = loginRouter