const path = require('path')
require('dotenv').config({
    path: path.join(__dirname,'..','.env')
})

// const mysql = require('mysql')
if(process.env.IS_DEVELOPMENT == 'true'){
    console.log(process.env.PORT)
}
// const connection = mysql.createConnection({
//   host     : process.env.DB_HOST,
//   user     : process.env.DB_USER,
//   password : process.env.DB_PWD,
//   database : process.env.DB_NAME
// })
    
//connection.connect();
//if(process.env.IS_DEVELOPMENT == true){
console.log(process.env.IS_DEVELOPMENT)
console.log(process.env.PORT)
console.log(process.env.DB_NAME)
console.log(process.env.DB_HOST)
console.log(process.env.DB_PWD)
console.log(process.env.DB_USER)
//}

