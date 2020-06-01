const mongoose = require("mongoose");

const LogoSchema = new mongoose.Schema({
  mainColor: {
    type: String,
    require: true,
  },
  secondaryColor: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  secondaryImage: {
    type: String,
    require: true,
  },
});

const Logo = mongoose.model("Logo", LogoSchema);

module.exports = { Logo, LogoSchema };
