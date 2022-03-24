// const express = require("express");
// const app = express();
// const mysql = require("mysql");

// const db = mysql.createPool({
//   host: "localhost",
//   user: "postgres",
//   password: "root",
//   database: "managment_system",
// });

// app.get("/", (req, res) => {
//   const sqlInsert =
//     "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('inception', 'good movie');";

//   db.query(sqlInsert, (err, result) => {
//     res.send("hello maciek");
//   });
// });

// app.listen(3001, () => {
//   console.log("running on port 3001");
// });
const { Client } = require("pg");
const client = new Client({
  host: "localhost",
  user: "postgres",
  password: "root",
  database: "manage_system",
});
client.connect();
client.query("Select * from test", (err, result) => {
  if (!err) {
    console.log(res.rows);
  } else {
    console.log(err.message);
  }
  client.end;
});
