// Dependencies
// ===================================
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Initialize Express
// =====================================
var app = express();
let PORT = process.env.PORT || 3000;

// Configure middleware
// =====================================
// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// NOT SURE WHAT TO DO WITH BELOW
// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/mongoHeadlines");
// I added this part....
// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Routes
// =====================================
require("./routes/routes.js")(app);


// Start the server
// =====================================
app.listen(PORT, function() {
  console.log("App running on //localhost:" + PORT);
});