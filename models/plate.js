module.exports = function(sequelize, DataTypes) {

  var Plate = sequelize.define("Plate", {
    name: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: false
  });

  return Plate;
};
