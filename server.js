const express = require('express');
const app = express();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.get('/', (req, res) => {
  res.send("*** ShareDAFHouse ***");
});

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/shareHouse"

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI);

const PORT = process.env.PORT || 3001;

app.listen(PORT, function() {
  console.log("ShareDaHouse listening on port: " + PORT);
});
