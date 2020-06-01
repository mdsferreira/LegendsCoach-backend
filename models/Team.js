const mongoose = require("mongoose");
const { PlayerSchema } = require("./Player");
const { LogoSchema } = require("./Logo");
const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  shortName: {
    type: String,
    require: true,
  },
  players: {
    type: [PlayerSchema],
    require: false,
  },
  logo: {
    type: LogoSchema,
    require: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Team = mongoose.model("Team", TeamSchema);

module.exports = { Team, TeamSchema };
