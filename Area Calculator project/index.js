const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const PORT = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/circle", (req, res) => {
  res.sendFile(__dirname + "/circle.html");
});

app.get("/triangle", (req, res) => {
  res.sendFile(__dirname + "/triangle.html");
});

app.post("/triangle", (req, res) => {
  const height = req.body.height;
  const base = req.body.base;
  const area = 0.5 * base * height;
  res.send(`<h2>Area of Triangle ${area}</h2>`);
});

app.post("/circle", (req, res) => {
  const radius = req.body.radius;

  const area = 0.5 * radius;
  res.send(`<h2>Area of Circle ${area}</h2>`);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
