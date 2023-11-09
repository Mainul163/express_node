const {
  getAllUsers,
  createAlluser,
  updateUser,
  userDelete,
} = require("../controllers/users.controller");

const router = require("express").Router();

router.get("/", getAllUsers);
router.post("/", createAlluser);
router.put("/:id", updateUser);
router.delete("/:id", userDelete);
module.exports = router;
