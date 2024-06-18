function addTask() {
    const taskInput = document.getElementById('task');
    const dateInput = document.getElementById('date');
    const priorityInput = document.getElementById('priority');
    const taskList = document.getElementById('task-list');

    const task = taskInput.value;
    const date = dateInput.value;
    const priority = priorityInput.value;

    if (task === '' || date === '') {
        alert('Please enter both task and date.');
        return;
    }

    const li = document.createElement('li');
    li.className = priority.toLowerCase();
    li.appendChild(document.createTextNode(`${task} - ${date} [${priority}]`));

    const deleteButton = document.createElement('button');
    deleteButton.appendChild(document.createTextNode('Delete'));
    deleteButton.className = 'delete';
    deleteButton.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = '';
    dateInput.value = '';
    priorityInput.value = 'High';
}

