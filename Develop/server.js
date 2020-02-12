const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";

mongoose.connect(MONGODB_URI);

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));
// app.use(require("./routes/routes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
