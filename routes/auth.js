const { Router } = require("express");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/validate-fields");
const {
  createUser,
  loginUser,
  revalidateToken,
} = require("../controllers/auth");
const { validateJWT } = require("../middlewares/validate-jwt");

const router = Router();

// Create a new user
router.post(
  "/new",
  [
    check("name", "Name is required").notEmpty(),
    check("email", "Email is required").isEmail(),
    check("password", "Password is invalid").isLength({ min: 6 }),
    validateFields,
  ],
  createUser
);

// User login
router.post(
  "/",
  [
    check("email", "Email is required").isEmail(),
    check("password", "Password is invalid").isLength({ min: 6 }),
    validateFields,
  ],
  loginUser
);

// Valitade token
router.get("/renew", validateJWT, revalidateToken);

module.exports = router;
