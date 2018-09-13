var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Order = sequelize.define("order", {
  user_id: {
    type: Sequelize.STRING
  },
  items: {
    type: Sequelize.STRING
  },
  completed: {
    type: Sequelize.BOOLEAN
  }
});

Order.sync();

module.exports = Order;
