const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// html routes
app.use(require("./routes/routes.js"));

app.use(require("./routes/routes.js"));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/exercise", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/exercise.html"));
});

app.get("/stats", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/stats.html"));
});

app.listen(PORT, () => {
  console.log(`Application running on port ${PORT}!`);
});
