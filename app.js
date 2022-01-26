//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');
var fullBlogPosts = [];
var blogPosts = [];
var postCounter = 0;

app.get("/", function(req, res) {

  res.render("home", {newBlogPost: blogPosts, newFullPost: fullBlogPosts});
});


app.post("/", function(req, res){

var blogPost = req.body.newBlogPost;
var postlength = req.body.newBlogPost.length

  if (postlength >= 100) {
  var fullBlogPost = blogPost;
  blogPost = fullBlogPost.slice(0, 100);
  fullBlogPosts.push(fullBlogPost);
  }

blogPosts.push(blogPost);
postCounter++;
res.redirect("/");

});

app.get("/about", function(req, res) {
  res.render("about");
});

app.get("/contact", function(req, res) {
  res.render("contact");
});

app.get("/post", function(req, res) {
  res.render("post", {newBlogPost: blogPosts});
});

app.listen(3000, function() {
  console.log("server started on port 3000");
});
