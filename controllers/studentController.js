// Import Student model
// This allows us to interact with MongoDB
const Student = require("../models/Student");

// ========================================
// GET ALL STUDENTS
// Route: GET /students
// Query Example:
// /students?gender=Male
// ========================================

const getAllStudents = async (req, res) => {
  try {
    // Get gender from query params
    const { gender } = req.query;

    // Create filter object
    let filter = {};

    // If gender is provided, apply filter
    if (gender) {
      filter.gender = gender;
    }

    // Find students using filter
    const students = await Student.find(filter);

    // If no students found
    if (students.length === 0) {
      // If query filter was used
      if (gender) {
        return res.status(404).json({
          error: `No ${gender} students found`,
        });
      }

      // If no students exist at all
      return res.status(404).json({
        error: "No students found",
      });
    }

    // Return students if found
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

/*
========================================
GET SINGLE STUDENT
Route: GET /students/:id
========================================
*/
const getSingleStudent = async (req, res) => {
  try {
    // Get ID from URL params
    const { id } = req.params;

    // Find student by MongoDB ID
    const student = await Student.findById(id);

    // If no student found
    if (!student) {
      return res.status(404).json({
        error: "Student not found",
      });
    }

    // Return student data
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// ========================================
// CREATE NEW STUDENT
// Route: POST /students
// ========================================

const createStudent = async (req, res) => {
  try {
    // Extract data from request body
    const { name, email, gender, phoneNumber } = req.body;

    // Validate required fields
    // If any field is missing, return error
    if (!name || !email || !gender || !phoneNumber) {
      return res.status(400).json({
        error: "Name, Email, Gender and Phone Number are required",
      });
    }

    // Create new student in MongoDB
    const newStudent = await Student.create({
      name,
      email,
      gender,
      phoneNumber,
    });

    // Return success response
    res.status(201).json(newStudent);
  } catch (error) {
    // Handle server errors
    res.status(500).json({
      error: error.message,
    });
  }
};

// ========================================
// UPDATE STUDENT
// Route: PATCH /students/:id
// ========================================

const updateStudent = async (req, res) => {
  try {
    // Get student ID from URL
    const { id } = req.params;

    // Get fields from request body
    const { name, email, gender, phoneNumber } = req.body;

    // Ensure at least one field is provided
    if (!name && !email && !gender && !phoneNumber) {
      return res.status(400).json({
        error: "At least one field is required for update",
      });
    }

    // Find student by ID and update
    const updatedStudent = await Student.findByIdAndUpdate(
      id,

      // Fields to update
      {
        name,
        email,
        gender,
        phoneNumber,
      },

      // Options
      {
        new: true, // return updated document
        runValidators: true, // enforce schema validation
      },
    );

    // If student not found
    if (!updatedStudent) {
      return res.status(404).json({
        error: "Student not found",
      });
    }

    // Return updated student
    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// ========================================
// DELETE STUDENT
// Route: DELETE /students/:id
// ========================================

const deleteStudent = async (req, res) => {
  try {
    // Get student ID from URL params
    const { id } = req.params;

    // Find student by ID and delete
    const deletedStudent = await Student.findByIdAndDelete(id);

    // If student does not exist
    if (!deletedStudent) {
      return res.status(404).json({
        error: "Student not found",
      });
    }

    // Return success message
    res.status(200).json({
      message: "Student deleted successfully",
    });
  } catch (error) {
    // Handle server errors
    res.status(500).json({
      error: error.message,
    });
  }
};

// Export functions
module.exports = {
  getAllStudents,
  getSingleStudent,
  createStudent,
  updateStudent,
  deleteStudent,
};
