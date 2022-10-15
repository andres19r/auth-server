const { response } = require('express')

const createUser = (req, res = response) => {
  return res.json({
    ok: true,
    msg: 'Create user /new'
  })
}

const loginUser = (req, res) => {
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
