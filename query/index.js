const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  const id = req.query.id;
  const name = req.query.name;
  res.send(`student id is ${id} and name ${name}`);
});

app.get("/user", (req, res) => {
  const id = req.query.id;

  res.send(`student id is ${id} and name `);
});

app.get("/login/userId/:id/userAge/:age", (req, res) => {
  const id = req.params.id;
  const age = req.params.age;
  res.send(`student id is ${id} and name ${age}`);
});

app.get("/student", (req, res) => {
  const id = req.header("id");
  const name = req.header("name");

  res.send(`student id is ${id} and name ${name}`);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
