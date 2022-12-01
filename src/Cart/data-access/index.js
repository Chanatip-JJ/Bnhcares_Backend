const Mssql  = require('../../helpers/Mssql')
const buildCart = require('./cart-sql')
const sql = require('mssql/msnodesqlv8')



const CartAccessDB = buildCart({Mssql,sql})




module.exports = CartAccessDB



