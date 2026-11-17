let nameInput = document.querySelector('#name-input');
let eventInput = document.querySelector('#event-input');
let addButton = document.querySelector('#add-button');
let totalCounter = document.querySelector('#total-counter');
let confirmedCounter = document.querySelector('#confirmed-counter');
let emptyMessage = document.querySelector('#empty-message');
let requestList = document.querySelector('#request-list');
let clearButton = document.querySelector('#clear-button');

function updateStats()
{
    let total = requestList.querySelectorAll('li').length;
    totalCounter.textContent = total;
    confirmedCounter.textContent = requestList.querySelectorAll('.confirmed').length;

    if (total === 0)
    {
        emptyMessage.classList.remove('hidden');
    }
    else
    {
        emptyMessage.classList.add('hidden');
    }
}

function addRequest()
{
    let name = nameInput.value.trim();
    let eventName = eventInput.value.trim();

    if (name === '' || eventName === '')
    {
        alert('Заповніть обидва поля!');
        return;
    }

    let li = document.createElement('li');

    let info = document.createElement('div');
    info.classList.add('info');

    let nameText = document.createElement('h3');
    nameText.textContent = name;

    let eventText = document.createElement('p');
    eventText.textContent = eventName;

    let status = document.createElement('span');
    status.classList.add('status');
    status.textContent = 'Очікує';

    info.append(nameText, eventText, status);

    let confirmButton = document.createElement('button');
    confirmButton.textContent = 'Підтвердити';
    confirmButton.addEventListener('click', function ()
    {
        li.classList.toggle('confirmed');

        if (li.classList.contains('confirmed'))
        {
            status.textContent = 'Підтверджено';
        }
        else
        {
            status.textContent = 'Очікує';
        }
        updateStats();
    });

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Видалити';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', function ()
    {
        li.remove();
        updateStats();
    });

    li.append(info, confirmButton, deleteButton);
    requestList.append(li);

    nameInput.value = '';
    eventInput.value = '';
    updateStats();
}

function clearAll()
{
    let userAnswer = confirm('Видалити всі заявки?');
    if (userAnswer)
    {
        requestList.innerHTML = '';
        updateStats();
    }
}

addButton.addEventListener('click', addRequest);
clearButton.addEventListener('click', clearAll);
