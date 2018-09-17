var db = require("../models");

module.exports = function(app) {

  //query to place and oder into the db
  app.post("/api/place", function(req, res){
    db.Order.create({
      user_id: req.body.userId,
      items: req.body.items
    }).then(function(data){
      res.json(data);
    });
  });

  //query to mark an order as complete in the db
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

  //query to get total number of outstanding orders for a specific user. Used to display outstanding
  //order count in side nav
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
