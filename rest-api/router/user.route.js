const {
  getAllUsers,
  createAlluser,
  updateUser,
} = require("../controllers/users.controller");

const router = require("express").Router();

router.get("/", getAllUsers);
router.post("/", createAlluser);
router.put("/:id", updateUser);
module.exports = router;
