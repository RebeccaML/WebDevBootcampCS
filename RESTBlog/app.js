let express = require("express");
let bodyParser = require("body-parser");
let methodOverride = require("method-override");
let mongoose = require("mongoose");
let app = express();

mongoose.connect("mongodb://localhost:27017/restful_blog_app", {useNewUrlParser: true});
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));

let blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

let Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
//     title: "Test Blog",
//     image: "https://images.freeimages.com/images/large-previews/51f/healthy-food-1328279.jpg",
//     body: "This is a test blog post with a picture of a delicious sandwich!"
// });

app.get("/", function(req, res) {
    res.redirect("/posts");
});

app.get("/posts", function(req, res) {
    Blog.find({}, function(err, posts) {
        if (err) {
            console.log("Error!");
        }
        else {
            res.render("index", {posts: posts});
        }
    });
});

app.get("/posts/new", function(req, res) {
    res.render("new");
});

app.post("/posts", function(req, res) {
    Blog.create(req.body.post, function(err, newPost) {
        if (err) {
            res.render("new");
        }
        else {
            res.redirect("/posts");
        }
    });
});

app.get("/posts/:id", function(req, res) {
    Blog.findById(req.params.id, function(err, foundPost) {
        if (err) {
            res.redirect("/posts");
        }
        else {
            res.render("show", {post: foundPost});
        }
    });
});

app.get("/posts/:id/edit", function(req, res) {
    Blog.findById(req.params.id, function(err, foundPost) {
        if (err){
            res.redirect("/posts");
        }
        else {
            res.render("edit", {post: foundPost});
        }
    });
});

app.put("/posts/:id", function(req, res) {
    Blog.findByIdAndUpdate(req.params.id, req.body.post, function(err, updatedPost) {
        if (err) {
            res.redirect("/posts");
        }
        else {
            res.redirect("/posts/" + req.params.id);
        }
    });
});

app.listen("3000", function() {
    console.log("Listening on port 3000");
});