const API_URL = "http://localhost:3000/tasks";

// Load tasks from the server and render them
async function loadTasks() {
  const res = await fetch(API_URL);
  const tasks = await res.json();

  const list = document.getElementById("taskList");
  list.innerHTML = "";
  tasks.forEach(({ id, text }) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <input value="${text}" onchange="updateTask(${id}, this.value)">
      <button onclick="deleteTask(${id})">❌</button>
    `;

    list.appendChild(li);
  });
}

// Add a new task
async function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();
  if (!text) return;

  // POST the new task to the server
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

  input.value = "";
  loadTasks(); // Reload tasks after adding
}

// Update an existing task
async function updateTask(id, text) {
  await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

  loadTasks(); // Reload tasks after update
}

// Delete a task
async function deleteTask(id) {
  try {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    loadTasks(); // Reload tasks after delete
  } catch (error) {
    console.error("Failed to delete task:", error);
  }
}

// Load tasks on page load
loadTasks();