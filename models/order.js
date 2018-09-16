module.exports = function(sequelize, DataTypes) {

  var Order = sequelize.define("Order", {
    user_id: {
      type: DataTypes.STRING
    },
    items: {
      type: DataTypes.STRING
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  return Order;
};
