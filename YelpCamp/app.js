let express = require("express");
let app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

let campgrounds = [
    {name: "Mystic Falls", image: "https://images.freeimages.com/images/large-previews/16d/waterfall-1502869.jpg"},
    {name: "Dark Forest", image: "https://images.freeimages.com/images/large-previews/bf0/forest-1177728.jpg"},
    {name: "Tranquil Woods", image: "https://images.freeimages.com/images/large-previews/0e6/campsite-1-1058369.jpg"}
]

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res) {
    let name = req.body.name;
    let image = req.body.image;
    let newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");
});

app.listen(3000, function() {
    console.log("Listening on port 3000");
});