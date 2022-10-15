const express = require("express");
const cors = require("cors");
require('dotenv').config();

// Create the express server/app
const app = express();

// Public directory
app.use(express.static('public'))

// CORS
app.use(cors());

// Reading & body parsing
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
