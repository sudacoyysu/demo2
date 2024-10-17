const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskValue = taskInput.value.trim();

    if (taskValue === '') {
        alert("Please enter a task.");
        return;
    }

    const listItem = document.createElement('li');

    // Create the input field for the task
    const taskText = document.createElement('input');
    taskText.type = 'text';
    taskText.value = taskValue;
    taskText.setAttribute('readonly', 'readonly');
    taskText.addEventListener('dblclick', () => editTask(taskText));

    // Create the delete button
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-btn';
    deleteButton.innerHTML = '🗑️';
    deleteButton.addEventListener('click', () => removeTask(listItem));

    // Add task text and delete button to the list item
    listItem.appendChild(taskText);
    listItem.appendChild(deleteButton);

    // Add the list item to the task list
    taskList.appendChild(listItem);

    // Clear input field after adding task
    taskInput.value = '';
}

function editTask(taskInput) {
    taskInput.removeAttribute('readonly');
    taskInput.focus();
    taskInput.addEventListener('blur', () => {
        taskInput.setAttribute('readonly', 'readonly');
    });
}

function removeTask(listItem) {
    taskList.removeChild(listItem);
}
