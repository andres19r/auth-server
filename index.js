const express = require("express");

// Create the express server/app
const app = express();

// Routes
app.use('/api/auth', require('./routes/auth'))

app.listen(4000, () => {
  console.log(`Server running on port ${4000}`)
})
