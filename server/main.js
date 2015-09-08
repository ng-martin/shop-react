var express = require("express");

var app = new express();

app.use(express.static(__dirname + "/../app"));
app.set("views", __dirname + "/../app/views");
app.set("view engine", "ejs");

app.use(function(req, res, next) {
    console.log('Initiate > Time: %d', Date.now());
    next();
});

app.use(function(req, res, next) {
    console.log('re-Initiate request');   
    next();
});

var controller = require("../server/controllers/studentController");
controller.init(app);

app.listen(1234);