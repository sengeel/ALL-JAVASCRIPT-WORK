const taskform = document.getElementById('task-form');
const taskinput = document.getElementById('task-input');    
const tasklist = document.getElementById('task-list')

function HandleSubmit() {
    const taskText = taskinput.value.trim()
    
    if (taskText !== '') {
        addTask(taskText)
      taskinput.value = ''
      taskinput.focus()
        
    }else{
        alert('Please, fill in the input field')
    }
}

function addTask(text) {
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    taskItem.innerHTML = `
    ${text}
    <button class="delete-btn">Delete</button>
    <button class="edit-btn">Edit</button>
    `;

    const deleteBtn = taskItem.querySelector('.delete-btn')

    deleteBtn.addEventListener('click', function() {
        taskItem.remove();
    });

    const editBtn = taskItem.querySelector( '.edit-btn')
    editBtn.addEventListener('click', function() {
        const newText = prompt('Enter new task text:',text);
        if (newText !== null && newText.trim() !== '') {
            taskItem.firstChild.textContent = newText;
        }
    });

    tasklist.appendChild(taskItem);
}