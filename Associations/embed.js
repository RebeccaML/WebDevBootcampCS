let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo");

let postSchema = new mongoose.Schema({
    title: String,
    content: String
});

let Post = mongoose.model("Post", postSchema);

let userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

let User = mongoose.model("User", userSchema);

User.findOne({name: "Niamh O'Brien"}, function(err, user) {
    if (err) {
        console.log(err);
    }
    else {
        user.posts.push({
            title: "Avoiding Danger",
            content: "Stay out of dark forests and abandoned temples"
        });
        user.save(function(err, user) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(user);
            }
        });
    }
});

// let newUser = new User({
//     email: "niamh@dangerland.com",
//     name: "Niamh O'Brien"
// });

// newUser.posts.push({
//     title: "How to Control Magic",
//     content: "It's much harder than you might think"
// });

// newUser.save(function(err, user) {
//     if (err) {
//     console.log(err);
//     }
//     else {
//         console.log(user);
//     }
// });

// let newPost = new Post({
//     title: "Reflections on Apples",
//     content: "They are delicious"
// });

// newPost.save(function(err, post) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(post);
//     }
// });