const mongoose = require("mongoose");
const { PlayerSchema } = require("./Player");
const { LogoSchema } = require("./Logo");
const { UserSchema } = require("./User");

const UserTeamSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  players: {
    type: [PlayerSchema],
    require: false,
  },
  logo: {
    type: LogoSchema,
    require: true,
  },
  modified_at: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: UserSchema,
    require: true,
  },
});

const UserTeam = mongoose.model("UserTeam", UserTeamSchema);

module.exports = { UserTeam, UserTeamSchema };
