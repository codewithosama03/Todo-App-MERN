# MERN Task Manager – Full Stack Todo Application

## About

MERN Task Manager is a full stack web application built using the MERN stack (MongoDB, Express, React, Node.js).

This project is created as a **learning-focused full stack application** to understand how frontend and backend systems connect, how APIs work, and how data flows between client and server.

Users can create, view, update, and delete tasks, with all data stored in MongoDB and managed through a REST API built with Express and Node.js. The frontend is built using React with Tailwind CSS for a clean and responsive UI.

This project demonstrates the complete flow of a real-world application from UI to database.

⚠️ **Note:** This project is currently under development and will be improved further with additional features and enhancements.

---

## Features

* Create new tasks
* View all tasks
* Delete tasks
* Toggle task completion status
* REST API integration (GET, POST, DELETE, PUT)
* Persistent data storage using MongoDB Atlas
* Clean and responsive UI with Tailwind CSS
* Full frontend-backend integration

---

## Project Structure / Components

### Backend (Node.js + Express)

* **server.js**: Entry point of backend server
* **routes/taskRoutes.js**: API route definitions
* **controllers/taskController.js**: Business logic for tasks
* **models/task.js**: Mongoose schema and model
* **config/db.js** (optional): Database connection setup

### Frontend (React + Vite)

* **App.jsx**: Main component
* **main.jsx**: Application entry point
* **pages/Home.jsx**: Main UI page for task handling
* **components/TaskCard.jsx**: Individual task UI
* **services/api.js**: API calls to backend

---

## Technologies Used

* MongoDB Atlas (Database)
* Express.js (Backend framework)
* React.js (Frontend library)
* Node.js (Runtime environment)
* Mongoose (ODM for MongoDB)
* Tailwind CSS (Styling)
* Vite (Frontend build tool)

---

## Learning Outcome

* Understanding full stack architecture (frontend + backend + database)
* Building REST APIs using Express and Node.js
* Connecting React frontend with backend APIs
* Managing and structuring backend code (routes, controllers, models)
* Using MongoDB Atlas for cloud database storage
* Handling environment variables securely
* Debugging real-world issues like CORS, deployment errors, and API failures
* Deploying full stack applications

---

## Future Upgrades

* Edit/update tasks
* User authentication (login/signup)
* Task filtering (completed / pending)
* Due dates and priority levels
* Drag and drop task management
* Improved UI/UX design
* Full production-level deployment with custom domain

---

## Notes

* This is a **learning-focused MERN project**
* Data is stored in MongoDB Atlas (cloud database)
* Backend is deployed on Render and frontend on Vercel (if deployed)
* Environment variables are used for secure configuration

---

## Status

Project Status: Under Construction
This project will continue to evolve with more advanced features and improvements.
