
function readText(message)
{
    while (true)
    {
        let input = prompt(message);
        if (input === null)
        {
            return null;
        }
        input = input.trim();
        if (input !== "")
        {
            return input;
        }
        alert("Порожнє значення. спробуйте ще раз.");
    }
}


function readInt(message, min, max)
{
    while (true)
    {
        let input = prompt(message);
        if (input === null)
        {
            return null;
        }
        input = input.trim();
        let number = Number(input);
        if (input !== "" && Number.isInteger(number) && number >= min && number <= max)
        {
            return number;
        }
        alert(`Неправильне значення. Введіть ціле число від ${min} до ${max}.`);
    }
}


function readMinInt(message, min)
{
    while (true)
    {
        let input = prompt(message);
        if (input === null)
        {
            return null;
        }
        input = input.trim();
        let number = Number(input);
        if (input !== "" && Number.isInteger(number) && number >= min)
        {
            return number;
        }
        alert(`Неправильне значення. Введіть ціле число не менше ${min}.`);
    }
}


function findIndexByName(list, name)
{
    let target = name.trim().toLowerCase();
    for (let i = 0; i < list.length; i++)
    {
        if (list[i].toLowerCase() === target)
        {
            return i;
        }
    }
    return -1;
}


let topics = ["JavaScript", "HTML", "CSS", "Git", "WebStorm", "Vue"];
let seats = [12, 8, 15, 0, 6, 10];


function buildCatalog(minSeats)
{
    let text = "";
    for (let i = 0; i < topics.length; i++)
    {
        if (seats[i] >= minSeats)
        {
            let status = "";
            if(seats[i] > 0) status = "Набір відкрито";
            else status = "Місць немає";
            text += `${(i + 1)}. ${topics[i]} - вільних місць: ${seats[i]} - ${status}\n`;
        }
    }
    return text;
}

let name = readText("Введіть ваше ім'я:");
while (name === null)
{
    alert("Ім'я потрібно для роботи. Спробуйте ще раз.");
    name = readText("Введіть ваше ім'я:");
}
let day = readInt("Введіть день народження (1-31):", 1, 31);
while (day === null)
{
    alert("День народження потрібен для роботи. Спробуйте ще раз.");
    day = readInt("Введіть день народження (1-31):", 1, 31);
}
let month = readInt("Введіть місяць народження (1-12):", 1, 12);
while (month === null)
{
    alert("Місяць народження потрібен для роботи. Спробуйте ще раз.");
    month = readInt("Введіть місяць народження (1-12):", 1, 12);
}

// __________________________________________ завдання 1
let personalNumber = (name.length + day + month) % topics.length;
alert("Персонально рекомендований вебінар: " + topics[personalNumber]);

alert("Каталог вебінарів:\n" + buildCatalog(0));

let minSeats = readMinInt("Введіть мінімальну кількість вільних місць:", 0);
if (minSeats === null)
{
    alert("Скасовано.");
}
else
{
    let filtered = buildCatalog(minSeats);
    if (filtered === "")
    {
        alert("Таких вебінарів немає.");
    }
    else
    {
        alert("Вебінари:\n" + filtered);
    }
}

// __________________________________________ завдання 2
let searchName = readText("Введіть назву вебінару для запису:");
if (searchName === null)
{
    alert("Скасовано.");
}
else
{
    let foundIndex = findIndexByName(topics, searchName);
    if (foundIndex === -1)
    {
        alert("Вебінар '" + searchName + "' не знайдено.");
    }
    else if (seats[foundIndex] > 0)
    {
        if (confirm(`Записатися на вебінар '${topics[foundIndex]}'?`))
        {
            seats[foundIndex] -= 1;
            alert(`Ви успішно записані на '${topics[foundIndex]}'.\nЗалишилось вільних місць:${seats[foundIndex]}`);
        }
        else
        {
            alert("Скасовано.");
        }
    }
    else
    {
        alert("На вебінар немає вільних місць.");
    }
}

// __________________________________________ завдання 3
let participants = [];
participants.push(name);

for (let i = 0; i < 4; i++)
{
    let participant = readText(`Введіть ім'я учасника ${(i + 1)} з 4:`);
    if (participant === null)
    {
        alert("Скасовано.");
        break;
    }
    participants.push(participant);
}

function buildParticipantsList()
{
    let text = "";
    for (let i = 0; i < participants.length; i++)
    {
        text += (i + 1) + ". " + participants[i] + "\n";
    }
    return text;
}

alert("Список учасників:\n" + buildParticipantsList());

let longerCount = 0;
for (let i = 0; i < participants.length; i++)
{
    if (participants[i].length > name.length)
    {
        longerCount++;
    }
}
alert(`Кількість імен, довших за ваше: ${longerCount}\nПерсональний поріг: ${name.length}`);

if (confirm("Бажаєте змінити ім'я учасника?"))
{
    let number = readInt(`Введіть номер учасника (1-${participants.length}):`, 1, participants.length);
    if (number === null)
    {
        alert("Скасовано.");
    }
    else
    {
        let newName = readText("Введіть нове ім'я:");
        if (newName === null)
        {
            alert("Скасовано.");
        }
        else {
            participants[number - 1] = newName;
            alert("Оновлений список учасників:\n" + buildParticipantsList());
        }
    }
}

// __________________________________________ завдання 4

let visits = [24, 18, 32, 0, 15, 27, 9, 21];
let bonus = (day + month) % 7;

let personalVisits = [];
for (let i = 0; i < visits.length; i++)
{
    personalVisits.push(visits[i] + bonus);
}


function getVisitStats(values)
{
    let sum = 0;
    let max = values[0];
    let min = values[0];
    for (let i = 0; i < values.length; i++)
    {
        sum += values[i];
        if (values[i] > max)
        {
            max = values[i];
        }
        if (values[i] < min)
        {
            min = values[i];
        }
    }
    return [sum, sum / values.length, max, min];
}

let stats = getVisitStats(personalVisits);

let threshold = readMinInt("Введіть поріг відвідуваності:", 0);
if (threshold === null)
{
    alert("Скасовано.");
}
else
{
    let reachedCount = 0;
    for (let i = 0; i < personalVisits.length; i++)
    {
        if (personalVisits[i] >= threshold)
        {
            reachedCount++;
        }
    }

    alert(
        `Персональні відвідування: ${personalVisits.join(", ")}\n` +
        `Бонус: ${bonus}\n` +
        `Сума: ${stats[0]}\n` +
        `Середнє: ${stats[1]}\n` +
        `Максимум: ${stats[2]}\n` +
        `Мінімум: ${stats[3]}\n` +
        `Кількість значень, не менших за ${threshold}: ${reachedCount}`
    );

    if (confirm("Показати номери вебінарів, які досягли порогу?"))
    {
        let numbers = "";
        for (let i = 0; i < personalVisits.length; i++)
        {
            if (personalVisits[i] >= threshold)
            {
                numbers += (i + 1) + " ";
            }
        }
        if (numbers === "")
        {
            alert(`Жоден вебінар не досяг порогу ${threshold}.`);
        }
        else
        {
            alert(`Номери вебінарів, що досягли порогу ${threshold}: ${numbers.trim()}`);
        }
    }
}

// __________________________________________ завдання 5
function showTopics()
{
    if (topics.length === 0)
    {
        alert("Список вебінарів порожній.");
    }
    else
    {
        alert("Список вебінарів:\n" + buildCatalog(0));
    }
}

function searchTopic()
{
    let query = readText("Введіть назву вебінару для пошуку:");
    if (query === null)
    {
        alert("скасовано.");
        return;
    }
    let index = findIndexByName(topics, query);
    if (index === -1)
    {
        alert("Вебінар не знайдено.");
    }
    else {
        alert(`Знайдено: ${(index + 1)}. ${topics[index]} (вільних місць: ${seats[index]})`);

    }
}

let running = true;
do
{
    let choice = prompt(
        "МЕНЮ\n" +
        "1 - показати вебінари\n" +
        "2 - додати вебінар\n" +
        "3 - перейменувати за номером\n" +
        "4 - знайти вебінар\n" +
        "5 - видалити останній вебінар\n" +
        "0 - вихід"
    );
    if (choice === null)
    {
        choice = "0";
    }
    else
    {
        choice = choice.trim();
    }
    switch (choice)
    {
        case "1":
            showTopics();
            break;

        case "2":
        {
            let newTopic = readText("Введіть назву нового вебінару:");
            if (newTopic === null)
            {
                alert("Скасовано.");
                break;
            }
            let newSeats = readMinInt("Введіть кількість місць для вебінару:", 0);
            if (newSeats === null)
            {
                alert("Скасовано.");
                break;
            }
            topics.push(newTopic);
            seats.push(newSeats);
            alert(`Вебінар ${newTopic} додано (місць: ${newSeats}.`);
            break;
        }

        case "3":
        {
            if (topics.length === 0)
            {
                alert("Список порожній, не можна нічого перейменувати.");
                break;
            }
            showTopics();
            let number = readInt(`Введіть номер вебінару (1-${topics.length}):`, 1, topics.length);
            if (number === null)
            {
                alert("Скасовано.");
                break;
            }
            let renamed = readText("Введіть нову назву:");
            if (renamed === null)
            {
                alert("Скасовано.");
                break;
            }
            topics[number - 1] = renamed;
            alert(`Вебінар №${number} перейменовано на '${renamed}'.`);
            break;
        }

        case "4":
            searchTopic();
            break;

        case "5":
            if (topics.length === 0)
            {
                alert("Список порожній, видаляти нічого.");
            }
            else if (confirm(`Видалити останній вебінар '${topics[topics.length - 1]}'?`))
            {
                let removed = topics.pop();
                seats.pop();
                alert("Вебінар видалено.");
            }
            else
            {
                alert("Скасовано.");
            }
            break;

        case "0":
            if (confirm("Ви дійсно хочете вийти з меню?"))
            {
                running = false;
                alert("Вихід з меню.");
            }
            break;

        default:
            alert("Невідомий пункт меню. Оберіть число від 0 до 5.");
    }
} while (running);

// __________________________________________ завдання 6
let requestScores = [72, 95, 41, 86, 60, 100, 53, 88, 29];
let personalScore = (day * month + name.length) % 101;
requestScores.push(personalScore);

function distributeRequests(scores)
{
    let high = [];
    let medium = [];
    let low = [];
    for (let i = 0; i < scores.length; i++)
    {
        if (scores[i] >= 85)
        {
            high.push(scores[i]);
        }
        else if (scores[i] >= 50)
        {
            medium.push(scores[i]);
        }
        else
        {
            low.push(scores[i]);
        }
    }
    return [high, medium, low];
}

function getGroupName(score)
{
    if (score >= 85)
    {
        return "high";
    }
    else if (score >= 50)
    {
        return "medium";
    }
    return "low";
}

let addMore = true;
do
{
    let input = prompt("Введіть новий бал (від 0 до 100) або натисніть 'Скасувати':");
    if (input === null)
    {
        alert("Додавання завершено.");
        break;
    }
    input = input.trim();
    let score = Number(input);
    if (input === "" || Number.isNaN(score) || score < 0 || score > 100)
    {
        alert("Неправильне значення. Бал має бути числом від 0 до 100.");
    }
    else
    {
        requestScores.push(score);
        alert("Бал додано.");
    }
    addMore = confirm("Продовжити додавання балів?");
} while (addMore);

let groups = distributeRequests(requestScores);
let groupNames = ["high", "medium", "low"];

let report = `Усі бали: ${requestScores.join(", ")}\n\n`;
let maxCount = 0;
for (let g = 0; g < groups.length; g++)
{
    let group = groups[g];
    let sum = 0;
    for (let i = 0; i < group.length; i++)
    {
        sum += group[i];
    }
    let average;
    if(group.length > 0) average = sum / group.length;
    else average = "-";

    let content;
    if(group.length > 0) content = group.join(", ");
    else content = "-";

    report += "Група " + groupNames[g] + ":\n" +
        "  Вміст: " + content + "\n" +
        "  Кількість: " + group.length + "\n" +
        "  Середній бал: " + average + "\n";
    if (group.length > maxCount)
    {
        maxCount = group.length;
    }
}

let largest = "";
for (let g = 0; g < groups.length; g++)
{
    if (groups[g].length === maxCount)
    {
        largest += groupNames[g] + " ";
    }
}
report += "\nНайбільша група/групи: " + largest.trim();
report += "\nВаш персональний бал: " + personalScore + " (група " + getGroupName(personalScore) + ")";

alert(report);