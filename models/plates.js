var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Plate = sequelize.define({
  name: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
});

Plate.sync();

module.exports = Plate;
