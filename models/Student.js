// Import mongoose
// We need mongoose to create Schema and Model
const mongoose = require("mongoose");

// Create Student Schema
// A schema defines how student data should look in MongoDB
const studentSchema = new mongoose.Schema(
  {
    // Student name
    // required: true means name must be provided
    name: {
      type: String,
      required: true,
    },

    // Student email
    // Must also be provided
    email: {
      type: String,
      required: true,
    },

    // Student gender
    gender: {
      type: String,
      required: true,
    },

    // Student phone number
    phoneNumber: {
      type: String,
      required: true,
    },
  },

  // timestamps automatically adds:
  // createdAt and updatedAt
  {
    timestamps: true,
  },
);

// Create the Model
// "Student" = collection name reference
const Student = mongoose.model("Student", studentSchema);

// Export the model
// So we can use it inside controllers
module.exports = Student;
