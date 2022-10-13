const express = require("express")

// Create the express server/app
const app = express();

// GET
app.get('/', (req, res) => {
  res.json({
    ok: true,
    msg: 'OK',
    uuid: 1234
  })
})

app.listen(4000, () => {
  console.log(`Server running on port ${4000}`)
})
