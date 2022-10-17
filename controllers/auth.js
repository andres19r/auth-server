const { response } = require('express');

const createUser = (req, res = response) => {
  const { email, name, password } = req.body;
  console.log(email, name, password)

  return res.json({
    ok: true,
    msg: 'Create user /new'
  })
}

const loginUser = (req, res = response) => {
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
