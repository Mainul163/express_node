const express = require("express");
const app = express();

const PORT = 3000;

app.get("/products/:id([0-9]+)", (req, res) => {
  const id = req.params.id;
  res.send(`<h1>products id is ${id}</h1>`);
});
app.get("/products/:title([a-zA-Z]+)", (req, res) => {
  const id = req.params.title;
  res.send(`<h1>products id is ${id}</h1>`);
});
app.use("*", (req, res) => {
  res.status(404).send({
    message: "not a valid route",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
