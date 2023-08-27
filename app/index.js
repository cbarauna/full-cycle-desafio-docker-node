const express = require("express");
const mysql = require("mysql");
const app = express();

const config = {
  host: "dbmysql",
  user: "root",
  password: "root",
  database: "mydb",
};
const connection = mysql.createConnection(config);
const sqlInsert = `INSERT INTO dados(nome) value('Carlos Baraúna')`;
connection.query(sqlInsert);
connection.end();

app.get("/", (_request, response) => {
  const connection = mysql.createConnection(config);
  connection.connect(function (err) {
    if (err) throw err;
    connection.query("SELECT * FROM dados", function (err, result, fields) {
      if (err) throw err;
      let res = "<p><h3>Dados do MySql</h3></p>"
      result.forEach(f => {
       res =  res.concat(`<p>Id: ${f.id}  Nome: ${f.nome} </p>`)
      });
      console.log(`Dados de Res ${res}`)
      response.send(`<h1>Full Cycle</h1><br/> ${res}`);
    });
  });
});

app.listen(3000, () => {
  console.log("Server started in port 3000");
});
