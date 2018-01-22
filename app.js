const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load event listeners
const loadEventListeners = () => {
  form.addEventListener('submit', addTask);
};
// Add task
const addTask = (e) => {
  if(taskInput.value === '') {
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

loadEventListeners();