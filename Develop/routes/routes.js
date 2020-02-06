// Routes for the database

const router = require("express").Router();
const Workout = require("../models/workout.js");

// html routes

router.get("./", (req, res) => {
  res.redirect("./public/index.html");
});

router.get("./exercise", (req, res) => {
  res.redirect("exercise.html");
});
router.get("./stats", (req, res) => {
  res.redirect("stats.html");
});

//api routes

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { excercises: body } },
    { new: true, runValidators: true }
  );
});

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
