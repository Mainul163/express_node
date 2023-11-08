let users = require("../model/user.model");
const { v4: uuidv4 } = require("uuid");

// get method
const getAllUsers = (req, res) => {
  res.status(200).json({ users });
};
// post method
const createAlluser = (req, res) => {
  const newuser = {
    id: uuidv4(),
    username: req.body.username,
    email: req.body.email,
  };
  users.push(newuser);
  res.status(200).json(users);
};

//update method

const updateUser = (req, res) => {
  const userid = req.params.id;
  const { username, email } = req.body;
  users
    .filter((user) => user.id === userid)
    .map((selecteduser) => {
      (selecteduser.username = username), (selecteduser.email = email);
    });

  res.status(200).json(users);
};
module.exports = { getAllUsers, createAlluser, updateUser };
