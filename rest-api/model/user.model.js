const { v4: uuidv4 } = require("uuid");

const user = [
  {
    id: uuidv4(),
    username: "nahid islam",
    email: "nahid@gmail.com",
  },
  {
    id: uuidv4(),
    username: "mainul islam",
    email: "mainul@gmail.com",
  },
];

module.exports = user;
