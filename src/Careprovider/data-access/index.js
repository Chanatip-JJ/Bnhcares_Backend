const Mssql  = require('../../helpers/Mssql')
const {date_config} = require('../../helpers/Mssql/Date_config')
const buildCareProvider = require('./careprovider-sql')
const buildLocation = require('./location-sql')
const buildWorkingHour = require('./working-hours-sql')
const sql = require('mssql/msnodesqlv8')




const CareProviderAccessDB = buildCareProvider({Mssql,sql})
const LocationAccessDB = buildLocation({date_config,sql})
const WorkingHourAccessDB = buildWorkingHour({date_config,sql})


module.exports = {CareProviderAccessDB,LocationAccessDB,WorkingHourAccessDB}



