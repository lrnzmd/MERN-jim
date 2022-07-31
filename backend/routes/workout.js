const express = require("express");
const Workout = require('../models/workoutModel')

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ mssg: "GET all workout" });
});

router.get("/:id", (req, res) => {
  res.json({ mssg: "GET one workout" });
});

router.post("/", async (req, res) => {
  const {title, load, reps} = req.body

  try {
    const workout = await Workout.create({
      title, load, reps
    })
    
    res.status(200).json({workout})

  } catch (error) {
    res.status(200).json({error: error.message})
  }
  //res.json({ mssg: "POST a workout" });
});

router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a workout" });
});

router.patch("/:id", (req, res) => {
  res.json({ mssg: "PATCH a workout" });
});

module.exports = router;
