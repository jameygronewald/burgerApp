const mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  connection = mysql.createConnection({
    host: 'rtzsaka6vivj2zp1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'f9538u22rckzyp7u',
    password: 'bdw0zvcf5w5s5iuo',
    database: 'tasa4byibp60c67u'
  });
}

connection.connect();
module.exports = connection;