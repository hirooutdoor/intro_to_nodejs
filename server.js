//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello, Rokugodote!</h1>");
});

app.get("/contact", function(req, res){
    res.send("Contact me at: hiro@hirorhiro.com")
});

app.get("/about", function(req, res){
    res.send("<h1>Welcome to my Web site!</h1>\n<h2>My name</h2>\nHirofumi Maeyama\n<h2>My age</h2>\n27 years old\n<h2>My hobby</h2>\n<li>Outdoor Sports</li><li>Programming</li><li>Reading</li>")
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});