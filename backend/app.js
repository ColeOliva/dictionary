const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const router = require("./routes/wordRoutes");
const cors = require("cors");

// Create Express server
const app = express();
// set the port
const port = process.env.PORT || 3001;

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to enable CORS
app.use(cors());

// Connect to MongoDB database
mongoose.connect(process.env.ATLAS_URI);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// Routes
app.use("/words", router);

// start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
