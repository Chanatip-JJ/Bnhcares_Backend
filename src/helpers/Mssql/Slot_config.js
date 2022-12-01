exports.slot_config = {
        database: process.env.DB_NAME_SLOT,
        server: process.env.DB_HOST_SLOT,
        driver: "msnodesqlv8",
        user:process.env.DB_USER_SLOT,
        password:process.env.DB_PWD_SLOT,
        pool: {
            max: 10,
            min: 0,
            idleTimeoutMillis: 30000
        },
        options: {
        trustedConnection: false
        }
    }

