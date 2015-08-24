var express = require("express");

var app = new express();

app.get("/", function(req, res, next) {
   res.send("Test only");     
});

app.listen(1234);