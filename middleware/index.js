const express = require("express");
const app = express();
const PORT = 3000;

const middleware = (req, res, next) => {
  console.log("hay i am middleware");
  req.currentTime = new Date(Date.now());

  next();
};
app.use(middleware);

app.use((req, res, next) => {
  res.send("404 bed url request");
  next();
});

app.use((err, req, res, next) => {
  if (err.message) {
    res.status(500).send(err.massage);
  } else {
    res.status(500).send("there is an error");
  }
});
app.get("/", (req, res) => {
  console.log("i am hone " + req.currentTime);
  res.send("hello it is about page", a);
});

app.get("/about", (req, res) => {
  res.send("hello it is about page extra");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
