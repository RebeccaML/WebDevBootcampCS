let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let Campground = require("./models/campground");
let Comment = require("./models/comment");
// let User = require("./models/user");
let seedDB = require("./seed");

// seedDB();
mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

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
            res.render("campgrounds/index", {campgrounds: campgrounds});
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
    res.render("campgrounds/new");
});

app.get("/campgrounds/:id", function(req, res) {
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});

// Comments routes

app.get("/campgrounds/:id/comments/new", function(req, res) {
    Campground.findById(req.params.id, function(err, campground) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("comments/new", {campground: campground});
        }
    });
});

app.post("/campgrounds/:id/comments", function(req, res) {
    Campground.findById(req.params.id, function(err, campground) {
        if (err) {
            console.log(err);
            res.redirect("/campground");
        }
        else {
            Comment.create(req.body.comment, function(err, comment) {
                if (err) {
                    console.log(err);
                }
                else {
                    campground.comments.push(comment);
                    campground.save();
                    res.redirect("/campgrounds/" + campground._id);
                }
            });
        }
    })
});

app.listen(3000, function() {
    console.log("Listening on port 3000");
});