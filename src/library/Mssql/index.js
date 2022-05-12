const path = require('path')
require('dotenv').config({
    path: path.join(__dirname,'..','..','..','.env')
})
const sql = require('mssql/msnodesqlv8');
const {config} = require('./config')
const connectDB = require('./mssql.js');



const Mssql = connectDB({sql,config})


module.exports = Mssql




