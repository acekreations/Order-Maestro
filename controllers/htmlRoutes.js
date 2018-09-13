var express = require("express");

var router = express.Router();

var Order = require("../models/orders.js");
var Plate = require("../models/plates.js");

router.get("/", function(req, res){
  Plate.findAll({}).then(function(plates){
    res.render("index", {plates: plates, active: { create: true}});
  });
});

router.get("/outstanding/:id", function(req, res){
  Order.findAll({
    where: {
      user_id: req.body.id,
      completed: false
    }
  }).then(function(orders){
    res.render("outstanding", {orders: orders, active: { outstanding: true}});
  });
});

router.get("/completed", function(req, res){
  res.render("completed", {active: { completed: true}});
});

module.exports = router;
