# Student Record API

## Project Overview

Student Record API is a backend application built with Node.js, Express.js, MongoDB Atlas, and Mongoose for managing student records efficiently. It supports full CRUD operations (Create, Read, Update, Delete), query filtering by gender, error handling, and persistent cloud database storage.

This project was migrated from a dummy in-memory array to MongoDB Atlas for real-world backend functionality and deployment readiness.

---

## Features

* Create new student records
* Get all students
* Get a single student by ID
* Update student details
* Delete student records
* Filter students by gender using query parameters
* MongoDB Atlas cloud database integration
* Clean project architecture using MVC structure
* Error handling middleware
* Environment variable security with dotenv

---

## Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Postman
* Render (for deployment)

---

## API Endpoints

### GET all students

```http
GET /students
```

### GET single student

```http
GET /students/:id
```

### POST create student

```http
POST /students
```

### PATCH update student

```http
PATCH /students/:id
```

### DELETE student

```http
DELETE /students/:id
```

### Query filter by gender

```http
GET /students?gender=Male
GET /students?gender=Female
```

---

## Example Request Body

```json
{
  "name": "David",
  "email": "david@gmail.com",
  "gender": "Male",
  "phoneNumber": "08012345678"
}
```

---

## Project Structure

```text
config/
models/
controllers/
routes/
middleware/
server.js
.env
package.json
```

---

## Installation

```bash
npm install
npm run dev
```

---

## Environment Variables

Create a `.env` file and add:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

---

## Author

Opeyemi Ishola, developed as part of backend API migration and deployment assignment using MongoDB and Mongoose.
