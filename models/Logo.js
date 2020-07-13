const mongoose = require("mongoose");
const { number } = require("@hapi/joi");

const LogoSchema = new mongoose.Schema({
  badge: {
    type: Number,
    require: true,
  },
  badge_color: {
    type: String,
    require: true,
  },
  logo: {
    type: Number,
    require: true,
  },
  logo_color: {
    type: String,
    require: true,
  },
});

const Logo = mongoose.model("Logo", LogoSchema);

module.exports = { Logo, LogoSchema };
