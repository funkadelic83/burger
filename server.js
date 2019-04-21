var express = require("express");
var exphbs = require("express-handlebars");

var app = express();

var PORT = process.env.PORT || 8080;

app.enginge("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

