const fs = require("fs");
const path = require("path")

const json = path.join(__dirname, 'db.json')
const data = fs.readFileSync(json);
const conf = JSON.parse(data);
const mysql = require("mysql")

const connection = mysql.createConnection({
   host : conf.host,
   user : conf.user,
   password : conf.password,
   port : conf.port,
   database : conf.database
    
})

connection.connect();

module.exports = connection