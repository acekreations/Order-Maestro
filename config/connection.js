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
      host: "localhost",
      port: 3306,

      user: "root",

      password: "password",
      database: "order_maestro_db"
    });
}


// Exporting our connection
module.exports = sequelize;
