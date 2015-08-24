var express = require("express");

var app = new express();

app.set("views", __dirname + "/../app/views");
app.set("view engine", "ejs");

app.get("/", function(req, res) {
   res.render("index", { data: "dunno" });     
});

app.listen(1234);