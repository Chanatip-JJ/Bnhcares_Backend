const Mssql  = require('../../helpers/Mssql')
const buildOrderHeader = require('./orderHeader-sql')
const buildOrderDetail = require('./orderDetail-sql')
const buildSearchOrderHeader = require('./orderHeader-search-sql')
const sql = require('mssql/msnodesqlv8')

const OrderHeaderAccessDB = buildOrderHeader({Mssql,sql})
const OrderDetailAccessDB = buildOrderDetail({Mssql,sql})
const OrderHeaderSearchDB = buildSearchOrderHeader({Mssql,sql})
module.exports= {
    OrderHeaderAccessDB,
    OrderDetailAccessDB,
    OrderHeaderSearchDB
}





