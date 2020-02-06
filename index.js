const express = require("express");
const mongoose = require("mongoose");
const app = express();
const env = require("dotenv");

env.config();
// DB config
const authRoute = require("./routes/auth");

// conect to mongo
mongoose
  .connect(process.env.DB_CONNECT, { iserNewUrlParser: true })
  .then(() => console.log("database connected!"))
  .catch(error => console.log(error));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

//Route Middlewares
app.use("/api/user", authRoute);

app.listen(3000, () => {
  console.log("backend running");
});
