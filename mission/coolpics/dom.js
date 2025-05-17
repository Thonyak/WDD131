function newTask() {
  // Get the list element
  const listElement = document.querySelector('#todoList');
  // Get the value entered into the #todo input
  const task = document.querySelector('#todo').value.trim();

  // Only add task if input is not empty
  if (task === '') return;

  // Render the task into the list
  listElement.innerHTML += `
    <li>
      <p>${task}</p>
      <div>
        <span data-function="delete">❎</span>
        <span data-function="complete">✅</span>
      </div>
    </li>`;

  // Clear input after adding task
  document.querySelector('#todo').value = '';
}

function manageTasks(e) {
  // Find the closest li (task item) to what was clicked
  const parent = e.target.closest("li");

  // If delete button clicked
  if (e.target.getAttribute("data-function") === "delete") {
    parent.remove();
  }

  // If complete button clicked
  if (e.target.getAttribute("data-function") === "complete") {
    parent.classList.toggle("strike");
  }
}

// Attach event listeners
document.querySelector('#submitTask').addEventListener('click', newTask);
document.querySelector('#todoList').addEventListener('click', manageTasks);
