const express = require("express");
const makeCallback = require("../helpers/express-callbacks");
const checkCategoryAccess = require('../middleware/checkPackageAccess')
const categoryRouter = express.Router({ mergeParams: true });
const { getCategory,
        getCategoryID,
        deleteCategory,
        postCategory,
        patchCategory,
        getPackageInCategory
      } = require("../Category/controllers");

//* swagger tags
/**
   * @openapi
   *  tags: 
   *    name: Category
   *    description: The Category managing API   
   */
  
//* swagger get method
/**
   * @openapi
   * '/category':
   *  get:
   *     tags: [Category]
   *     summary: Return a list of all categories.
   *     responses:
   *       200:
   *         description: Success
   */
  
categoryRouter.get('',makeCallback(getCategory))
//* swagger get catetory in Category
/**
   * @openapi
   * '/category/getPackage':
   *  get:
   *     tags: [Category]
   *     summary: Return a list of all packages in a specific category.
   *     description: Choose only either of parameters.
   *     parameters:
   *     - in: query
   *       name: name_th
   *       schema:
   *         type: string
   *       description: The name of category in Thai 
   *     - in: query
   *       name: name_en
   *       schema:
   *         type: string
   *       description: The name of category in English 
   *     responses:
   *       200:
   *         description: Success
   *       404:
   *         description: Bad Request
   *       400:
   *         description: Category not found 
   */
categoryRouter.get('/getPackage',makeCallback(getPackageInCategory))
//* swagger get,patch,delete method
/**
   * @openapi
   * paths:
   *  '/category/{category_id}':
   *   get:
   *     tags: [Category]
   *     summary: Return the category.
   *     parameters:
   *     - in: path
   *       name: category_id
   *       description: Numeric ID of the category to get
   *       required: true
   *       type: Number 
   *     responses:
   *       200:
   *         description: Success
   *       400:
   *         description: Category not found
   *   delete:
   *     tags: [Category]
   *     summary: Delete the category
   *     parameters:
   *     - in: path
   *       name: category_id
   *       description: Numeric ID of the category to delete
   *       required: true
   *       type: Integer 
   *     responses:
   *       200:
   *         description: Success
   *       400:
   *         description: unsuccessfully deleted 
   *   patch:
   *     tags: [Category]
   *     summary: Edit the category
   *     parameters:
   *     - in: path
   *       name: category_id
   *       description: Numeric ID of the category to update
   *       required: true
   *       type: Integer
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/Category' 
   *     responses:
   *       200:
   *         description: Success
   *       404:
   *         description: Bad Request
   *       400:
   *         description: Category not found
   */
categoryRouter.get('/:category_id', makeCallback(getCategoryID));
categoryRouter.delete('/:category_id', makeCallback(deleteCategory));
categoryRouter.patch(`/:category_id`,makeCallback(patchCategory))

//* swagger post method
/**
   * @openapi
   * '/category/new':
   *  post:
   *     tags: [Category]
   *     summary: Create a new category
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/Category'
   *     responses:
   *      200:
   *        description: Success
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
categoryRouter.post('/new',makeCallback(postCategory))


module.exports = categoryRouter;
