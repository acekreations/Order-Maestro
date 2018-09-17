//Express
var express = require("express");
var app = express();

//Set port
var PORT = process.env.PORT || 8000;

//Require models
var db = require("./models");

//Set static file path for server
app.use(express.static("public"));

//Setup body parser
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Setup handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Set up routes
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

//set up models and start server
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
