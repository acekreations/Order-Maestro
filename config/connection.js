var Sequelize = require("sequelize");

var sequelize = new Sequelize("order_maestro_db", "root", "password", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});


// Exporting our connection
module.exports = sequelize;
