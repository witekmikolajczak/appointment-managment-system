const { Client } = require("pg");
const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "root",
  database: "manage_system",
});
client.connect();
client.query("Select * from test", (err, result) => {
  if (!err) {
    console.log(result.rows);
  } else {
    console.log(err.message);
  }
  client.end;
});
