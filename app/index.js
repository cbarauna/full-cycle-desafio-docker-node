const express = require("express");
const mysql = require('mysql')
const app = express();

const config ={
    host:'dbmysql',
    user: 'root',
    password: 'root',
    database: 'mydb'
}
const connection = mysql.createConnection(config)

const sql = `INSERT INTO data(name) value('Carlos Baraúna')`
connection.query(sql)
connection.end();

app.get("/", (_request, response) => {
  response.send("<h1>Full Cycle</h1>");
});

app.listen(3000, () => {
  console.log("Server started in port 3000");
});
