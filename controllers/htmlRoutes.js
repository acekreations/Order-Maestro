var express = require("express");

var router = express.Router();

var Order = require("../models/orders.js");
var Plate = require("../models/plates.js");

router.get("/", function(req, res){
  Plate.findAll({}).then(function(plates){
    // console.log(plateData);
    // plates = plates[0].dataValues;
    res.render("index", {plates: plates});
  });
});

module.exports = router;
