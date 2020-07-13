const router = require("express").Router();
const Team = require("../models/UserTeam.js").UserTeam;
const { Logo } = require("../models/Logo.js");
const Joi = require("@hapi/joi");
const auth = require("../middleware/auth");

const schema = Joi.object({
  name: Joi.string().min(3).required(),
  badge: Joi.number().required(),
  badge_color: Joi.string().min(7).max(7).required(),
  logo: Joi.number().required(),
  logo_color: Joi.string().min(7).max(7).required(),
  // shortName: Joi.string().min(3).max(3).required(),
});

router.post("/validate", auth, async (req, res) => {
  console.log(req.body);
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).send(error.details);
  }
  const nameExist = await Team.findOne({ name: req.body.name });
  if (nameExist) {
    return res.status(400).send("Name already exists");
  }
  try {
    res.send(true);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/create", auth, async (req, res) => {
  const { error } = schema.validate(req.body);
  if (error) {
    console.log(error);
    return res.status(400).send(error.details);
  }
  const nameExist = await Team.findOne({ name: req.body.name });
  if (nameExist) {
    console.log("notem");
    return res.status(400).send("Name already exists");
  }
  const user = req.user;
  try {
    const logo = new Logo({
      badge: req.body.badge,
      badge_color: req.body.badge_color,
      logo: req.body.logo,
      logo_color: req.body.logo_color,
    });
    const savedLogo = await logo.save();
    const team = new Team({
      name: req.body.name,
      logo: savedLogo,
      user,
    });
    const savedTeam = await team.save();
    console.log(savedTeam);
    res.send(savedTeam);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

module.exports = router;
