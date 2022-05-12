const { registerUser, loginUser } = require("../controllers/userController");

const router = require("express").Router();
router.post('/register', registerUser)
    .post('/login', loginUser)
module.exports = router