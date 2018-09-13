var express = require("express");

var router = express.Router();

var Order = require("../models/orders.js");
var Plate = require("../models/plates.js");

router.post("/place", function(req, res){
  Order.create({
    user_id: req.body.userId,
    items: req.body.items
  }).then(function(data){
    console.log("posted");
  });
});

router.get("/outstanding/:id", function(req, res){
  Order.findAll({
    where: {
      user_id: req.params.id,
      completed: false
    },
    order: [
      ['id', 'ASC'],
    ],
  }).then(function(orders){
    res.json(orders);
  });
});

module.exports = router;
