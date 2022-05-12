const Mssql  = require('../../library/Mssql')
const buildOrderHeader = require('./orderHeader-sql')
const buildOrderDetail = require('./orderDetail-sql')
const sql = require('mssql/msnodesqlv8')

const OrderHeaderAccessDB = buildOrderHeader({Mssql,sql})
const OrderDetailAccessDB = buildOrderDetail({Mssql,sql})

module.exports= {
    OrderHeaderAccessDB,
    OrderDetailAccessDB
}





