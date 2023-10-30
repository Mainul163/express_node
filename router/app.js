var express = require("express");
var app = express();
const userRouter = require("./routes/userRoute");

app.use(userRouter);

app.use("/", (req, res) => {
  res.send("404 !! Not a valid url");
});

app.get("/", (req, res) => {
  res.send("hello it is about page");
});

module.exports = app;
