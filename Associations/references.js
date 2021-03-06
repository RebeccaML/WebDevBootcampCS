let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo_2");

let Post = require("./models/post");
let User = require("./models/user");

// User.findOne({email: "sparkles@special.com"}).populate("posts").exec(function(err, user) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(user);
//     }
// });

Post.create({
    title: "Fairy Bread",
    content: "The secret method to make your fairy bread authentic."
}, function(err, post) {
    User.findOne({email: "sparkles@special.com"}, function(err, foundUser) {
        if (err) {
            console.log(err);
        }
        else {
            foundUser.posts.push(post);
            foundUser.save(function(err, data) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(data);
                }
            });
        }
    });
});

// User.create({
//     email: "sparkles@special.com",
//     name: "Sparkles Flutie"
// });