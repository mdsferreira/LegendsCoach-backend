const jwt = require("jsonwebtoken");

module.export = function(req, res, next) {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).send("Access Denied");
  }
  try {
    const verified = jwt.verify(token, process.env.TOKEN);
    req.user = verified;
    next();
  } catch (error) {
    res.status.send("Invalid Token");
  }
};
