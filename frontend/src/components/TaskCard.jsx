function TaskCard({ task, onDelete, onToggle }) {
  return (
    <div className="flex justify-between items-center bg-gray-900 text-white p-4 rounded-lg mb-3 shadow">
      
      <div className="flex items-center gap-3 h-10">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task._id)}
        />
        
        <span className={task.completed ? "line-through text-gray-400" : ""}>
          {task.title}
        </span>
      </div>

      <button
        onClick={() => onDelete(task._id)}
        className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
      >
        Delete
      </button>
    </div>
  );
}

export default TaskCard;