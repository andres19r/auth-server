const express = require("express");
const cors = require("cors");

// Create the express server/app
const app = express();

// CORS
app.use(cors());

// Reading & body parsing
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));

app.listen(4000, () => {
  console.log(`Server running on port ${4000}`);
});
