exports.date_config = {
        database: process.env.DB_NAME_DATE,
        server: process.env.DB_HOST_DATE,
        driver: "msnodesqlv8",
        user:process.env.DB_USER_DATE,
        password:process.env.DB_PWD_DATE,
        pool: {
            max: 10,
            min: 0,
            idleTimeoutMillis: 30000
        },
        options: {
        trustedConnection: false
        }
    }

