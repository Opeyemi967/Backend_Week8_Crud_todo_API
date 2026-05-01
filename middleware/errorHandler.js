// ========================================
// CUSTOM 404 ERROR HANDLER
// ========================================

// This runs when a route does not exist
// Example:
// GET /wrong route
const notFound = (req, res) => {
  res.status(404).json({
    error: "Route not found",
  });
};

// ========================================
// GENERAL SERVER ERROR HANDLER
// ========================================

// This handles unexpected server errors
// Example:
// database failure
// invalid server operation
const errorHandler = (err, req, res, next) => {
  // Use existing status code if available
  // Otherwise default to 500
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode).json({
    error: err.message || "Server Error",
  });
};

// Export both middleware functions
module.exports = {
  notFound,
  errorHandler,
};
