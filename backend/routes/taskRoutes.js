
//  express js useage here 
import express from "express";
import { getTasks, createTask, deleteTask } from "../controllers/taskController.js";
import { toggleTask } from "../controllers/taskController.js";

const router = express.Router();

router.get("/", getTasks);
router.post("/", createTask);
router.delete("/:id", deleteTask);
router.put("/:id", toggleTask);

export default router;
