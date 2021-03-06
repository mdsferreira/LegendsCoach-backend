const mongoose = require("mongoose");
const { PlayerSchema } = require("./Player");
const { LogoSchema } = require("./Logo");
const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  acronym: {
    type: String,
    require: true,
  },
  players: {
    type: [PlayerSchema],
    require: false,
  },
  image_url: {
    type: String,
    require: true,
  },
  logo: {
    type: LogoSchema,
    require: false,
  },
  modified_at: {
    type: Date,
    default: Date.now,
  },
  location: {
    type: String,
    require: true,
  },
  slug: {
    type: String,
    require: false,
  },
});

const Team = mongoose.model("Team", TeamSchema);

module.exports = { Team, TeamSchema };
