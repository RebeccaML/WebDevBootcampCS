var express = require("express");
var app = express();

app.listen(3000, function() {
    console.log("Listening on port 3000");
});

app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res) {
    let animal = req.params.animal.toLowerCase();
    let sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!",
        cat: "I hate you human",
        goldfish: "..."
    }
    let sound = sounds[animal];
    res.send(`The ${animal} says '${sound}'`);
});

app.get("/repeat/:word/:num", function(req, res) {
    let word = req.params.word.toLowerCase();
    let num = Numbers(req.params.num);
    let response = "";
    for (let i = 0; i < num; i++) {
        response += word + " ";
    }
    res.send(response);
});

app.get("*", function(req, res) {
    res.send("Sorry, page not found... What are you doing with your life?");
});