const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  nickName: {
    type: String,
    require: true,
  },
  nacionality: {
    type: String,
    require: true,
  },
  birthday: {
    type: Date,
    default: Date.now,
  },
  cost: {
    type: Number,
    default: 0,
  },
  photo: {
    type: String,
    default: "",
  },
});

const Player = mongoose.model("Player", PlayerSchema);

module.exports = { Player, PlayerSchema };
