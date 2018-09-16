var db = require("../models");

module.exports = function(app) {

  app.post("/api/place", function(req, res){
    db.Order.create({
      user_id: req.body.userId,
      items: req.body.items
    }).then(function(data){
      res.json(data);
    });
  });

  app.post("/api/complete", function(req, res){
    db.Order.update(
      {
        complete: true
      },
      {
        where: {
          id: req.body.id
        }
      }
    ).then(function(data){
      res.json(data);
    });
  });

  app.get("/api/outstanding/:id", function(req, res){
    db.Order.findAll({
      where: {
        user_id: req.params.id,
        complete: false
      },
      order: [
        ['id', 'ASC'],
      ],
    }).then(function(orders){
      res.json(orders);
    });
  });

};
