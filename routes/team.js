const router = require("express").Router();
const Team = require("../models/Team.js");
const Joi = require("@hapi/joi");

const schema = Joi.object({
  name: Joi.string().min(5).required(),
  shortName: Joi.string().min(3).max(3).required(),
});

router.post("/create", async (req, res) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).send(error.details);
  }
  const nameExist = await Team.findOne({ name: req.body.name });
  if (nameExist) {
    return res.status(400).send("Name already exists");
  }
  const team = new Team({
    name: req.body.name,
    shortName: req.body.shortName,
  });
  try {
    const savedTeam = await team.save();
    res.send(savedTeam);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
