var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.listen(3000, function() {
    console.log("Listening on port 3000");
});

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res) {
    let thing = req.params.thing;
    res.render("love", {thing: thing});
});

app.get("/posts", function(req, res) {
    let posts = [
        {title: "Post 1", author: "Kane"},
        {title: "Sparkle Fairies", author: "Cindy"},
        {title: "Everyone Dies", author: "Damien"}
    ];
    res.render("posts", {posts: posts});
});