let mysql = require('mysql2');

let con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Mamanlucie1906@@",
  database: "Node"
});

con.connect(function(err) {
  if (err) console.log(err);
  console.log("Connected!");
  let sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255));";
  con.query(sql, function (err, result) {
    if (err) console.log(err);
    console.log("Table created");
  });
});