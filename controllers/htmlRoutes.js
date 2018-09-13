var express = require("express");

var router = express.Router();

var Order = require("../models/orders.js");
var Plate = require("../models/plates.js");

router.get("/", function(req, res){
  Plate.findAll({}).then(function(plateData){
    res.render("index", plateData);
  });
});

module.exports = router;
