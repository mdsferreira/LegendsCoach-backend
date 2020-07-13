const router = require("express").Router();
const { League } = require("../models/League.js");
const auth = require("../middleware/auth");

router.get("/list", auth, async (req, res) => {
  try {
    const leagues = await League.find();
    res.send(leagues);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
