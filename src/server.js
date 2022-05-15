const path = require('path')
require('dotenv').config({
    path: path.join(__dirname,'..','.env')
})
const fs = require('fs')
const https = require('https')
const app = require('./app')

const PORT = process.env.PORT 
const option = {
    key: fs.readFileSync('_bnhhospital_com.key'),
    cert: fs.readFileSync('_bnhhospital_com.cer')
}
const server = https.createServer(option,app)


server.listen(PORT,() =>{
    if(process.env.DEV == 'true'){
    console.log(`Listen on port ${PORT}`)
    }
})