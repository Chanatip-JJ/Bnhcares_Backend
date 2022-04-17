const path = require('path')
require('dotenv').config({
    path: path.join(__dirname,'..','..','.env')
})
const sql = require('mssql/msnodesqlv8');

var pool = {}
class Mssql{
    static async getConnect(){
        try{
            const config = {
                database: process.env.DB_NAME,
                server: process.env.DB_HOST,
                driver: "msnodesqlv8",
                user:process.env.DB_USER,
                password:process.env.DB_PWD,
                options: {
                  trustedConnection: false
                }
            }
            pool = await new sql.ConnectionPool(config).connect()
            return pool
        }catch(e){
            console.log('Database configuration is error')
        }
    }
}

module.exports = Mssql









    

           

















