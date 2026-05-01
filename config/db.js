// import mongoose to connect to MongoDB database
// Mongoose helps Node.js connect to MongoDB and provides a schema-based solution to model application data
const mongoose = require("mongoose");

// Create a function to connect to the MongoDB database using Mongoose
// We used async because database connection takes time and we want to wait for it to complete before proceeding
const connectDB = async () => {
  try {
    // connect to MongoDB using the connection string from .env file
    await mongoose.connect(process.env.MONGODB_URI);
    // if connection is successful, log a success message
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    // if there is an error connecting to MongoDB, log the error and exit the process
    console.error("Error connecting to MongoDB:", error);
    // exit the process with failure code (1) to indicate that the application cannot run without a database connection
    process.exit(1);
  }
};

// Export the function
// This allows us to use connectDB() inside server.js
module.exports = connectDB;
