const { Router } = require("express")

const router = Router();

// Create a new user
router.post('/new', (req, res) => {
  return res.json({
    ok: true,
    msg: 'Create user /new'
  })
})

// User login
router.post('/', (req, res) => {
  return res.json({
    ok: true,
    msg: 'User login /'
  })
})

// Valitade token
router.get('/renew', (req, res) => {
  return res.json({
    ok: true,
    msg: 'Renew'
  })
})

module.exports = router;
