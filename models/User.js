const mongoose = require("mongoose");
const { TeamSchema } = require("./Team");
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  team: {
    type: TeamSchema,
    require: false,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = { User, UserSchema };
