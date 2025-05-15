let tasks = [];
let taskIdCounter = 0;

// Function to add a new task
const addTask = () => {
  const input = document.getElementById("taskInput");

  // removes extra whitespace
  const taskName = input.value.trim();

  if (taskName) {
    tasks.push({
      id: taskIdCounter++, 
      name: taskName,     
      done: false          
    });

    // Clear the input field after adding the task
    input.value = "";
    renderTasks();
  }
};

const renderTasks = () => {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = ""; 

  tasks.forEach((task, index) => {
    if (!task) return; 

    const listItem = document.createElement("li");
    
    // Set the task name and add action
    listItem.innerHTML = `${task.name}<img onclick="deleteTask(${index})" src="imgs/images.png">`;

    listItem.addEventListener('click', function () {
      listItem.classList.toggle('checked');
    });
    
    if (task.done) {
    }
    taskList.appendChild(listItem);
  });
};

// delete the task
const deleteTask = (index) => {
  tasks.splice(index, 1); 
  renderTasks();
};