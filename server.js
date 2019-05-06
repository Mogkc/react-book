const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Mongoose Connection
const mongoose = require('mongoose');
const db = require('../models/');

mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/googlebooks', { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("MongoDB Connected!"))
  .catch(err => console.error(err));

// Define API routes here
app.post("/api/books").then((req, res) => {
  db.Books
    .insertOne(req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

app.get("/api/books").then((req, res) => {
  db.Books.find({})
  .then(data => res.json(data))
  .catch(err => res.json(err));
});

app.delete("/api/books/:id").then((req, res) => {
  db.Books
  .findOneAndRemove({ _id: req.params.id })
  .catch(err => res.json(err));
});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
