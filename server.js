// ========================================
// IMPORT REQUIRED PACKAGES
// ========================================

// Import express framework
const express = require("express");

// Import dotenv to use .env variables
const dotenv = require("dotenv");

// ========================================
// IMPORT CUSTOM FILES
// ========================================

// Import MongoDB connection function
const connectDB = require("./config/db");

// Import student routes
const studentRoutes = require("./routes/studentRoutes");

// Import custom middleware
const { notFound, errorHandler } = require("./middleware/errorHandler");

// ========================================
// LOAD ENV VARIABLES
// ========================================

// Load environment variables from .env file
dotenv.config();

// ========================================
// CONNECT DATABASE
// ========================================

// Connect to MongoDB Atlas
connectDB();

// ========================================
// CREATE EXPRESS APP
// ========================================

const app = express();

// ========================================
// PORT SETUP
// ========================================

const PORT = process.env.PORT || 3000;

// ========================================
// MIDDLEWARE
// ========================================

// Parse JSON request body
app.use(express.json());

// Custom request logger
// Shows request method + route in terminal
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// ========================================
// ROUTES
// ========================================

// All student routes start with /students
app.use("/students", studentRoutes);

// ========================================
// ERROR MIDDLEWARE
// ========================================

// Handle routes that do not exist
app.use(notFound);

// Handle general server errors
app.use(errorHandler);

// ========================================
// START SERVER
// ========================================

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
