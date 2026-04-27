// import Task from "../models/Task.js";
import Task from "../models/task.js";

// GET all tasks
export const getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
}; 


// CREATE task
export const createTask = async (req, res) => {
  const { title } = req.body;

  const newTask = new Task({ title });
  await newTask.save();

  res.json(newTask);
};

// TOGGLE task
export const toggleTask = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findById(id);
  task.completed = !task.completed;

  await task.save();

  res.json(task);
};

// DELETE task
export const deleteTask = async (req, res) => {
  const { id } = req.params;

  await Task.findByIdAndDelete(id);
  res.json({ message: "Task deleted" });
};

