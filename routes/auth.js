const { Router } = require("express");
const { createUser, loginUser, revalidateToken } = require("../controllers/auth");

const router = Router();

// Create a new user
router.post('/new', createUser)

// User login
router.post('/', loginUser)

// Valitade token
router.get('/renew', revalidateToken)

module.exports = router;
