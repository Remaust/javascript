let taskInput = document.querySelector('#task-input');
let addButton = document.querySelector('#add-button');
let taskCounter = document.querySelector('#task-counter');
let taskList = document.querySelector('#task-list');

function updateCounter ()
{
    let count = taskList.querySelectorAll('li').length;
    taskCounter.textContent = count;
}

function addTask()
{
    let text = taskInput.value.trim();
    if (text === '')
    {
        alert('Введіть завдання');
        return;
    }

    let li = document.createElement('li');
    li.classList.add('task');
    let span = document.createElement('span');
    span.classList.add('task-text');
    span.textContent = text;

    let doneButton = document.createElement('button');
    doneButton.textContent = 'Готово';
    doneButton.addEventListener('click', function ()
    {
        li.classList.toggle('done');
    })

    let editButton = document.createElement('button');
    editButton.textContent = 'Змінити';
    editButton.classList.add('edit-btn')

    editButton.addEventListener('click', function ()
    {
        let newText = prompt('Змінити завдання:', span.textContent);
        if (newText === null)
            return;
        if (newText.trim() === '')
        {
            alert('Введіть завдання');
            return;
        }
        span.textContent = newText.trim();
    });

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Видалити';
    deleteButton.classList.add('delete-btn')

    deleteButton.addEventListener('click', function ()
    {
        let userAnswer = confirm('Видалити це завдання?');
        if (userAnswer)
        {
            li.remove();
            updateCounter();
        }
    })

    li.append(span, doneButton, editButton, deleteButton);
    taskList.append(li);
    updateCounter();
    taskInput.value = '';
}

addButton.addEventListener('click', addTask);