const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ mssg: "GET all workout" });
});

router.get("/:id", (req, res) => {
  res.json({ mssg: "GET one workout" });
});

router.post("/", (req, res) => {
  //req.body;
  res.json({ mssg: "POST a workout" });
});

router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a workout" });
});

router.patch("/:id", (req, res) => {
  res.json({ mssg: "PATCH a workout" });
});

module.exports = router;
