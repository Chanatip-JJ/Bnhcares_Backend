module.exports = function connectDB({sql,config}){
        return Object.freeze({
            getConnect
        })
        async function getConnect(){                 
                const pool = await new sql.ConnectionPool(config).connect()
                return pool            
    }
}






    

           

















