// var Sequelize = require("sequelize");
//
// var sequelize = new Sequelize("order_maestro_db", "root", "password", {
//   host: "localhost",
//   port: 3306,
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   }
// });
var mysql = require("mysql2");

var connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
      host: "bbj31ma8tye2kagi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
      port: 3306,

      user: "n572ffeihj1ngi18",

      password: "q9tr3qd4tj0v4a8u",
      database: "xugjtgheh7w93ht3"
    });
};


// Exporting our connection
module.exports = sequelize;
