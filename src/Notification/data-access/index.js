const Mssql  = require('../../helpers/Mssql')
const buildNotification = require('./notification-sql')
const sql = require('mssql/msnodesqlv8')



const NotificationAccessDB = buildNotification({Mssql,sql})




module.exports = NotificationAccessDB



