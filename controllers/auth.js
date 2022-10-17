const { response } = require('express');
const { validationResult } = require('express-validator');

const createUser = (req, res = response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped()
    });
  }

  const { email, name, password } = req.body;
  console.log(email, name, password)

  return res.json({
    ok: true,
    msg: 'Create user /new'
  })
}

const loginUser = (req, res = response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped()
    });
  }

  const { email, password } = req.body;
  console.log(email, password)

  return res.json({
    ok: true,
    msg: 'User login /'
  })
}

const revalidateToken = (req, res) => {
  return res.json({
    ok: true,
    msg: 'Renew'
  })
}

module.exports = {
  createUser,
  loginUser,
  revalidateToken
}
