const path = require('path')
require('dotenv').config({
    path: path.join(__dirname,'..','.env')
})
const http =require('http')
const app = require('./app')

const PORT = process.env.PORT 
const server = http.createServer(app)


server.listen(PORT,() =>{
    if(process.env.DEV == 'true'){
    console.log(`Listen on port ${PORT}`)
    }
})