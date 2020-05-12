let express = require("express");
let request = require("request");
let app = express();
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("search");
});

app.get("/results", function(req, res) {
    let search = req.query.search;
    let url = "http://omdbapi.com/?s=" + search + "&apikey=thewdb"
    request(url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            let data = JSON.parse(body);
            res.render("results", {data: data});
        }
    });
});

app.listen(3000, function() {
    console.log("Listening on port 3000");
});