//Express
var express = require("express");
var app = express();

//Set port
var PORT = process.env.PORT || 8080;

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
var routes = require("./controllers/orderRoutes.js");
app.use("/", routes);

app.listen(PORT, function(){
  console.log("listening on port " + PORT);
});
