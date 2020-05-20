let express = require("express");
let router = express.Router();
let passport = require("passport");
let User = require("../models/user");

//Root

router.get("/", function(req, res) {
    res.render("landing");
});

// Sign Up

router.get("/register", function(req, res) {
    res.render("register");
});

router.post("/register", function(req, res) {
    let newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if (err) {
            console.log(err);
            return res.render("/register");
        }
        passport.authenticate("local")(req, res, function() {
            res.redirect("/campgrounds");
        });
    });
});

// Login

router.get("/login", function(req, res) {
    res.render("login");
});

router.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login"
    }), function(req, res) {

});

// Logout

router.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/campgrounds");
});

// Middleware

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
};

module.exports = router;