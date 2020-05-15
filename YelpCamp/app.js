let express = require("express");
let app = express();
var bodyParser = require("body-parser");
let mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

let campgroundSchema = new mongoose.Schema({
    name: String,
    image: String, 
    description: String
});

let Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
//         name: "Swamp of Sorrows",
//         image: "https://images.freeimages.com/images/large-previews/915/camp-fire-1511939.jpg",
//         description: "This swamp is said to drain the happiness out of people."
//     }, function(err, campground) {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             console.log("Campground created: ");
//             console.log(campground);
//         }
//     });

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    Campground.find({}, function (err, campgrounds) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("index", {campgrounds: campgrounds});
        }
    });
});

app.post("/campgrounds", function(req, res) {
    let name = req.body.name;
    let image = req.body.image;
    let desc = req.body.image;
    let newCampground = {name: name, image: image, description: desc};
    Campground.create(newCampground, function(err, newlyCreated) {
        if (err) {
            console.log(err);
        }
        else {
            res.redirect("/campgrounds");
        }
    })
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");
});

app.get("/campgrounds/:id", function(req, res) {
    Campground.findById(req.params.id, function(err, foundCampground) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("show", {campground: foundCampground});
        }
    });
});

app.listen(3000, function() {
    console.log("Listening on port 3000");
});