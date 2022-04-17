const path = require('path')
const _ = require('lodash')
const PackageModel = require('../../model/package.model')
const { toInteger, isInteger, parseInt, isNaN } = require('lodash')


// async function httpGetPackages(req,res){
//     return res.status(200).json(await GetAllPackage())
// }

class PackageController{
    
    static async httpGetPackages(req, res){
        return res.status(200).json(await PackageModel.getAllPackages())
    }

    static async httpGetPackagesId(req, res){
        try{
            var dataResponse = null
            const packageId = parseInt(req.params.id)
            
            if(isNaN(packageId)){
                return res.status(404).json({
                    err: 'Package not found'
                })
            }
            const flag = await PackageModel.isExistPackage(packageId) 
            if(!flag){
                return res.status(404).json({
                    err: 'Package not exist'
                })                    
            }
            dataResponse = await PackageModel.getId(packageId)
            return res.status(200).json(dataResponse)

        }catch(e){
            return res.status(500).json({
                error:e.toString()
            })
        }
    }

    static async httpDeletePackageId(req,res){
        try{
            var dataResponse = null
            const packageId = parseInt(req.params.id)
            if(isNaN(packageId)){
                return res.status(404).json({
                    err: "Package not found"
                })
            }
            const flag = await PackageModel.isExistPackage(packageId) 
            if(!flag){
                return res.status(404).json({
                    err: 'Package not exist'
                })                    
            }
            dataResponse = await PackageModel.delete(packageId)

            return res.status(200).json(dataResponse)
        
        }catch(e){
            return res.status(500).json({
                error:e.toString()
            })
        }
    }

    static async httpUpdatePackageId(req,res){
        try{
            var dataResponse = null

            const packageId = parseInt(req.params.id)
            if(isNaN(packageId)){
                return res.status(404).json({
                    err: "Package not found"
                })
            }
            const flag = await PackageModel.isExistPackage(packageId) 
            if(!flag){
                return res.status(404).json({
                    err: 'Package not exist'
                })                    
            }
            dataResponse = await PackageModel.update(req)

            return res.status(200).json(dataResponse)
        
        }catch(e){
            return res.status(500).json({
                error:e.toString()
            })
        }
    }
    // static async httpTestRespond(req,res){
    //     if(_.isUndefined(req.body) && _.isEmpty(req.body)){
    //         return res.status(404).json({
    //             err: "Request is invalid"
    //         })
    //     }
    //     const package = req.body
    //     if()
        
    // }

    
}


module.exports = PackageController