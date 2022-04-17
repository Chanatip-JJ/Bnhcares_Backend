const sql = require('./mssql')
const Sequel = require('sequelize')


    const sequelize = new Sequel({
          dialect: 'mssql',
          dialectModulePath: 'msnodesqlv8/lib/sequelize',
          dialectOptions: {
            user: '',
            password: '',
            database: 'node',
            options: {
              driver: '',
              connectionString: `${sql.getConnect()}`,
              trustedConnection: true,
              instanceName: ''
            }
          },
          pool: {
            min: 0,
            max: 5,
            idle: 10000
          }
    })

sequelize.authenticate().then(() => {
      console.log("Sequelize is connected")
    }).catch(err => {
      console.log(`err`,err)
    })

module.exports = sequelize