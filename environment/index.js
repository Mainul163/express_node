require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("hello new");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

//install  npm i dotenv
//create file .env and write PORT=3000
//create file .gitignore  and write
// .env
// node_modules/
