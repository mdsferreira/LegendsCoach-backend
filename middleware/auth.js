const jwt = require("jsonwebtoken");
const { User } = require("../models/User.js");

module.exports = async (req, res, next) => {
  const token = req.headers["Bearer"] || req.headers["authorization"];
  if (!token) return res.status(401).send("Access denied. No token provided.");
  const [tokenType, tokenCod] = token.split(" ");
  console.log(tokenType, token);
  if (tokenType !== "Bearer" || !tokenCod) {
    console.log("error1");
    return res.status(401).send("Access denied. No token provided.");
  }
  try {
    const userId = jwt.verify(tokenCod, process.env.TOKEN);
    req.user = await User.findOne({ _id: userId._id });
    next();
  } catch (error) {
    console.log(error);

    res.status(400).send("Invalid token.");
  }
};
