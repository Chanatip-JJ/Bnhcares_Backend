const express = require("express");

const makeCallback = require("../helpers/express-callbacks");

const personRouter = express.Router({ mergeParams: true });
const { getPerson,
        getPersonID,
        getPersonByTelephone,
        getPersonByEmail,
        postPerson,
        patchPerson
      } = require("../Person/controllers");

//* swagger tags
/**
   * @openapi
   *  tags: 
   *    name: Person
   *    description: The Person managing API   
   */
//* swagger get method
/**
   * @openapi
   * '/person':
   *  get:
   *     tags: [Person]
   *     summary: Return a list of all person.
   *     responses:
   *       200:
   *         description: Success
   */
//* swagger get,patch method  
personRouter.get('',makeCallback(getPerson))

/**
   * @openapi
   * paths:
   *  '/person/findByTelephone/{telephone}':
   *   get:
   *     tags: [Person]
   *     summary: Return the person.
   *     parameters:
   *     - in: path
   *       name: telephone
   *       description: telephone number
   *       required: true
   *       type: Number 
   *     responses:
   *       200:
   *         description: Success
   *       400:
   *         description: Person not found
   */
personRouter.get('/findByTelephone/:telephone', makeCallback(getPersonByTelephone));

/**
   * @openapi
   * paths:
   *  '/person/findByEmail/{email}':
   *   get:
   *     tags: [Person]
   *     summary: Return the person.
   *     parameters:
   *     - in: path
   *       name: email
   *       description: E-mail
   *       required: true
   *       type: String 
   *     responses:
   *       200:
   *         description: Success
   *       400:
   *         description: Person not found
   */
 personRouter.get('/findByEmail/:email', makeCallback(getPersonByEmail));


/**
   * @openapi
   * paths:
   *  '/person/{person_id}':
   *   get:
   *     tags: [Person]
   *     summary: Return the person.
   *     parameters:
   *     - in: path
   *       name: person_id
   *       description: Numeric ID of the person to get
   *       required: true
   *       type: Number 
   *     responses:
   *       200:
   *         description: Success
   *       400:
   *         description: Person not found
   *   patch:
   *     tags: [Person]
   *     summary: Edit the person
   *     parameters:
   *     - in: path
   *       name: person_id
   *       description: Numeric ID of the person to update
   *       required: true
   *       type: Integer
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/Person' 
   *     responses:
   *       200:
   *         description: Success
   *       404:
   *         description: Bad Request
   *       400:
   *         description: Person not found
   */
personRouter.get('/:person_id', makeCallback(getPersonID));
personRouter.patch(`/:person_id`,makeCallback(patchPerson))
//* swagger post method
/**
   * @openapi
   * '/person/new':
   *  post:
   *     tags: [Person]
   *     summary: Create a new person
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/Person'
   *     responses:
   *      200:
   *        description: Success
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
personRouter.post('/new',makeCallback(postPerson))

module.exports = personRouter;
