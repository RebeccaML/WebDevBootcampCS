var express = require("express");
var app = express();

app.listen(3000, function() {
    console.log("Serving app on port 3000");
});

app.get("/", function(req, res) {
    res.send("Hi there!");
});

app.get("/bye", function(req, res) {
    res.send("Goodbye!");
});

app.get("/dog", function(req, res) {
    res.send("Woof!");
});

app.get("*", function(req, res) {
    res.send("You are a star!");
});