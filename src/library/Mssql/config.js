exports.config = {
        database: process.env.DB_NAME,
        server: process.env.DB_HOST,
        driver: "msnodesqlv8",
        user:process.env.DB_USER,
        password:process.env.DB_PWD,
        pool: {
            max: 10,
            min: 0,
            idleTimeoutMillis: 30000
        },
        options: {
        trustedConnection: false
        }
    }

