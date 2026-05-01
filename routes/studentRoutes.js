// Import express
// We use Router() to create route groups
const express = require("express");

// Create router object
const router = express.Router();

// Import controller functions
// These are the GET functions we created earlier
// Import controller functions
const {
  getAllStudents,
  getSingleStudent,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");
/*
========================================
GET ALL STUDENTS
Route: GET /students
========================================
*/
router.get("/", getAllStudents);

// ========================================
// CREATE NEW STUDENT
// Route: POST /students
// ========================================

router.post("/", createStudent);

/*
========================================
GET SINGLE STUDENT
Route: GET /students/:id
========================================
*/
router.get("/:id", getSingleStudent);

// ========================================
// UPDATE STUDENT
// Route: PATCH /students/:id
// ========================================

router.patch("/:id", updateStudent);

// ========================================
// DELETE STUDENT
// Route: DELETE /students/:id
// ========================================

router.delete("/:id", deleteStudent);

// Export router
// This allows server.js to use these routes
module.exports = router;
