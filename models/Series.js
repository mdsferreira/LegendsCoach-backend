const mongoose = require("mongoose");
const SerieSchema = new mongoose.Schema({
  id: {
    type: Number,
    require: true,
  },
  name: {
    type: String,
    require: false,
  },
  description: {
    type: String,
    require: true,
  },
  begin_at: {
    type: Date,
    require: true,
  },
  end_at: {
    type: Date,
    require: false,
  },
  full_name: {
    type: String,
    require: true,
  },
  league_id: {
    type: Number,
    require: true,
  },
  modified_at: {
    type: Date,
    default: Date.now,
  },
  season: {
    type: String,
    require: true,
  },
  slug: {
    type: String,
    require: true,
  },
  tier: {
    type: String,
    require: false,
  },
  winner_id: {
    type: Number,
    require: false,
  },
  winner_type: {
    type: String,
    require: false,
  },
  year: {
    type: Number,
    require: true,
  },
});

const Serie = mongoose.model("Serie", SerieSchema);

module.exports = { Serie, SerieSchema };
