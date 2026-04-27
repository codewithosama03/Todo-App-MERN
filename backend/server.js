import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import taskRoutes from "./routes/taskRoutes.js";

// Loads variables from .env into your app
dotenv.config();

const app = express();

// Allows frontend (React) to talk to backend
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/tasks", taskRoutes);
// All /tasks requests → go to taskRoutes

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(" MongoDB Error:", err.message));

app.listen(5000, () => {
  console.log("Server running on port 5000");
})