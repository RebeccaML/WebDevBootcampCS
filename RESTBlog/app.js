let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let app = express();

mongoose.connect("mongodb://localhost:27017/restful_blog_app", {useNewUrlParser: true});
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

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
    res.redirect("/blogs");
});

app.get("/blogs", function(req, res) {
    Blog.find({}, function(err, blogs) {
        if (err) {
            console.log("Error!");
        }
        else {
            res.render("index", {blogs: blogs});
        }
    });
});

app.listen("3000", function() {
    console.log("Listening on port 3000");
});