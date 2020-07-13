const mongoose = require("mongoose");
const { SeriesSchema } = require("./Player");
const LeagueSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      require: true,
    },
    image_url: {
      type: String,
      require: true,
    },
    modified_at: {
      type: Date,
      default: Date.now,
    },
    name: {
      type: String,
      require: true,
    },
    series: {
      type: [SeriesSchema],
      default: Date.now,
    },
    url: {
      type: String,
      require: true,
    },
    slug: {
      type: String,
      require: false,
    },
  },
  { collection: "leagues" }
);

const League = mongoose.model("League", LeagueSchema, "leagues");

module.exports = { League, LeagueSchema };
