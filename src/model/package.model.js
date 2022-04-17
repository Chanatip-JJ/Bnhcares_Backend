const path = require('path')
require('dotenv').config({
    path: path.join(__dirname,'..','..','.env')
})
const Mssql = require('../library/mssql.js')
const _ = require('lodash')
const sql = require('mssql/msnodesqlv8'); 
const { toInteger, parseInt, isBoolean } = require('lodash');

var StatementType = null

class PackageModel {
    // static async createPackage(req){
    //     statement = '' 
    //     const connection = await Mssql.getConnect()
    //     const request = await connection.request()
    //     request.input('name_th', sql.Varchar(sql.MAX),name_th)
    //             .input('name_en', sql.Varchar(sql.MAX),name_en)
    //             .input('description', sql.Varchar(sql.MAX),description)
    //             .input('package_amount', sql.Money ,package_amount)
    //     // statement_TYPE = INSERT
    //             .input('StatementType',sql.Varchar(20),statement_INSERT)
    //     // stored procedure
    //     const result = await request.execute('dbo.spPackage_InsertUpdateDelete').catch((err)=>{
    //         console.log(err)
    //         connection.close()
    //     })     
    //     connection.close()
    //     return result
    //     }
    static async isExistPackage(id){
        let funcName = 'PackageModel.isExistingPackage'
        const data = await this.getId(id)
        if(_.isEmpty(data)){
            return false
        }
        return true
        
    }

    static async delete(id){
        let funcName = 'PackageModel.delete'
            StatementType = 'Delete'
            var uid = id
            var name_th = null
            var name_en = null
            var description = null
            var package_amount = null 
            var status = 'inactive'
            const connection = await Mssql.getConnect()
            const request = await connection.request()
            request.input('uid', sql.Int, uid)
            .input('name_th', sql.VarChar(sql.MAX),name_th)
            .input('name_en', sql.VarChar(sql.MAX),name_en)
            .input('description', sql.VarChar(sql.MAX),description)
            .input('package_amount', sql.Money ,package_amount)
            .input('status',sql.VarChar(10),status)
            // statement_TYPE = delete
                .input('StatementType',sql.VarChar(20),StatementType)
            await request.execute('dbo.spPackage_InsertUpdateDelete')
            const dataResponse = await this.getId(uid)
            connection.close()
            if(process.env.IS_DEV === 'true'){
                console.log(funcName,dataResponse)
           }
            return dataResponse
        }    
    
    static async getAllPackages(){
        let funcName = 'PackageModel.getAllPackages'
        StatementType = 'GetAll'
        const connection = await Mssql.getConnect()
        const request = await connection.request()
        request.input('uid', sql.Int, null)
               .input('StatementType', sql.VarChar(20),StatementType)
        // stored procedure -> retrieve sql data
        const result = await request.execute('dbo.spPackage_GetAll')
        connection.close()
        
        const dataResponse = result.recordset
        if(process.env.IS_DEV == 'true'){
            console.log(funcName,dataResponse)
        }
        return dataResponse
    }
    
    static async getId(id){
            let funcName = 'PackageModel.getId'
            StatementType = 'GetId'
            var uid = id  
            const connection = await Mssql.getConnect()
            const request = await connection.request()
            // stored procedure -> search PackageIDs
            request.input('uid', sql.Int, uid)
                   .input('StatementType', sql.VarChar(20),StatementType)
            const result = await request.execute('dbo.spPackage_GetAll')
            connection.close()
            const dataResponse = result.recordset
            
            if(process.env.IS_DEV == 'true'){
                if(_.isEmpty(dataResponse)){
                    console.log('No package found')
                }
                console.log(funcName,dataResponse)
            }
            return dataResponse
        }

        static async update(id){
                let funcName = 'PackageModel.update'
                StatementType = 'Update'
                var uid = id
                var name_th = 'chemotherapy'
                var name_en = 'chemotherapy'
                var description = 'xxxxxxxxxxxxx'
                var package_amount = 150000
                var status = 'inactive'
                const connection = await Mssql.getConnect()
                const request = await connection.request()
                request.input('uid', sql.Int, uid)
                .input('name_th', sql.VarChar(sql.MAX),name_th)
                .input('name_en', sql.VarChar(sql.MAX),name_en)
                .input('description', sql.VarChar(sql.MAX),description)
                .input('package_amount', sql.Money ,parseInt(package_amount))
                .input('status',sql.VarChar(10),status)
                // statement_TYPE = delete
                .input('StatementType',sql.VarChar(20),StatementType)
                await request.execute('dbo.spPackage_InsertUpdateDelete')
                const dataResponse = await this.getId(uid)
                connection.close()
                if(process.env.IS_DEV === 'true'){
                    console.log(funcName,dataResponse)
               }
                return dataResponse
            }

    }

//PackageModel.isExistPackage(1).then(flag => console.log((isBoolean(flag))))
//PackageModel.update(3).then(rows => console.log((rows)))
module.exports = PackageModel
 