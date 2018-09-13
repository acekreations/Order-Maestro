var express = require("express");

var router = express.Router();

var Order = require("../models/orders.js");
var Plate = require("../models/plates.js");

router.get("/plates", function(req, res){
  Plate.findAll({}).then(function(data){
    res.json(data);
  });
});

module.exports = router;
