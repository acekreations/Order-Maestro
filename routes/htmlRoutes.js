var db = require("../models");

module.exports = function(app) {
  app.get("/", function(req, res){
    db.Plate.findAll({
      order: [
        ['name', 'ASC'],
      ],
    }).then(function(plates){
      res.render("index", {plates: plates, active: { create: true }});
    });
  });

  app.get("/outstanding/:id", function(req, res){
    db.Order.findAll({
      where: {
        user_id: req.params.id,
        complete: false
      },
      order: [
        ['id', 'ASC'],
      ],
    }).then(function(orders){
      for (var i = 0; i < orders.length; i++) {
        orders[i].dataValues.items = JSON.parse(orders[i].dataValues.items);
      }

      res.render("outstanding", {orders: orders, active: { outstanding: true}});
    });
  });

  app.get("/completed/:id", function(req, res){
    db.Order.findAll({
      where: {
        user_id: req.params.id,
        complete: true
      },
      order: [
        ['id', 'DESC'],
      ],
    }).then(function(orders){
      for (var i = 0; i < orders.length; i++) {
        orders[i].dataValues.items = JSON.parse(orders[i].dataValues.items);
      }

      res.render("completed", {orders: orders, active: { completed: true}});
    });
  });

};
