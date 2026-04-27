import { useEffect, useState } from "react";
import { getTasks, createTask, deleteTask, toggleTask  } from "../services/api";
import TaskCard from "../components/TaskCard";

// import { getTasks, createTask, deleteTask, toggleTask } from "../services/api";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  // Load tasks
  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleToggle = async (id) => {
  await toggleTask(id);
  fetchTasks();
};

  // Add task
  const handleAdd = async () => {
    if (!title) return;
    await createTask(title);
    setTitle("");
    fetchTasks();
  };

  // Delete task
  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

return (
  <div className="min-h-screen bg-gray-950 text-white flex justify-center items-start pt-10">
    
    <div className="w-full max-w-md bg-gray-800 p-6 rounded-xl shadow-lg">
      
      <h1 className="text-3xl font-bold mb-5 text-center">Task Manager</h1>

      <div className="flex gap-2 mb-5">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 flex-1 rounded bg-gray-700 outline-none"
          placeholder="Enter task..."
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 hover:bg-blue-600 px-4 rounded"
        >
          Add
        </button>
      </div>

      {tasks.length === 0 && (
        <p className="text-center text-gray-400">No tasks yet</p>
      )}

      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          onDelete={handleDelete}
          onToggle={handleToggle}
        />
      ))}
    </div>
  </div>
);
}

export default Home;