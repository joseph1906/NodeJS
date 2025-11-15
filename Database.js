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
  let UpdateTask = "SELECT * FROM customers";
  con.query( UpdateTask, function (err, result, fields) {
    if (err) console.log(err);
    console.log(result);
  });
});
