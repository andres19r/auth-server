const { Router } = require("express");
const { check } = require("express-validator");
const {
  createUser,
  loginUser,
  revalidateToken,
} = require("../controllers/auth");

const router = Router();

// Create a new user
router.post(
  "/new",
  [
    check("name", "Name is required").notEmpty(),
    check("email", "Email is required").isEmail(),
    check("password", "Password is invalid").isLength({ min: 6 }),
  ],
  createUser
);

// User login
router.post(
  "/",
  [
    check("email", "Email is required").isEmail(),
    check("password", "Password is invalid").isLength({ min: 6 }),
  ],
  loginUser
);

// Valitade token
router.get("/renew", revalidateToken);

module.exports = router;
