const path = require('path')
const express = require('express')
const _ = require('lodash')
const PackageController = require('./packages.controller')

const packageRouter = express.Router()

packageRouter.get('/',PackageController.httpGetPackages)
packageRouter.get('/:id',PackageController.httpGetPackagesId)
packageRouter.delete('/:id',PackageController.httpDeletePackageId)
//packageRouter.put('/:id',PackageController.httpDeletePackageId)
//packageRouter.post('/new',PackageController.httpCreatePackage)

//packageRouter.post('/testReq',PackageController.requestRespond)
module.exports = packageRouter