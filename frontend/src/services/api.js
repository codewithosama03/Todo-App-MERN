const BASE_URL = "https://todo-app-mern-4w5e.onrender.com/tasks";

// GET tasks
export const getTasks = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

// CREATE task
export const createTask = async (title) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });
  return res.json();
};

// DELETE task
export const deleteTask = async (id) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
};


// togglle 
export const toggleTask = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
  });
  return res.json();
};