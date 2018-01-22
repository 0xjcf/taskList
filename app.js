const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load event listeners
const loadEventListeners = () => {
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear all task event
  clearBtn.addEventListener('click', clearTasks);
  // Filter through task event
  filter.addEventListener('input', filterTasks);
};

// Add task
const addTask = (e) => {
  if (taskInput.value === '') {
    alert('add a task');
  }
// Create li item
  const li = document.createElement('li');
// Add class
  li.className = 'collection-item';
// Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
// Create new link element
  const link = document.createElement('a');
// Add class
  link.className = 'delete-item secondary-content';
// Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
// Append the link to the li
  li.appendChild(link);
// Append li to the ul
  taskList.appendChild(li);
// Clear input
  taskInput.value = '';

  e.preventDefault();
}

// Remove tasks
const removeTask = (e) => {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Clear all tasks
const clearTasks = () => {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

// Filter through tasks
const filterTasks = (e) => {
  const text = e.target.value.toLowerCase();

  const arr = taskList.childNodes;

  arr.forEach(task => {
    const item = task.firstChild.textContent.toLowerCase();
    if (item.indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    };
  });
}

loadEventListeners();