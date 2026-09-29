let basePrice = 0;
let eventType = +prompt(
    "Оберіть тип події:\n" +
    "1 - Кіно\n" +
    "2 - Театр\n" +
    "3 - Концерт"
);
while (eventType < 1 || eventType > 3 || Number.isNaN(eventType))
{
    alert("Неправильний номер події");
    eventType = +prompt(
        "Оберіть тип події:\n" +
        "1 - Кіно\n" +
        "2 - Театр\n" +
        "3 - Концерт"
    );
}
switch (eventType)
{
    case 1:
        basePrice = 150;
        break;
    case 2:
        basePrice = 220;
        break;
    case 3:
        basePrice = 350;
        break;
}
let dayType = +prompt(
    "Оберіть тип дня:\n" +
    "1 - Будній\n" +
    "2 - Вихідний"
);
while (dayType !== 1 && dayType !== 2)
{
    alert("Неправильний тип дня");
    dayType = +prompt(
        "Оберіть тип дня:\n" +
        "1 - Будній\n" +
        "2 - Вихідний"
    );
}
if (dayType === 2)
{
    basePrice = basePrice * 1.15;
}
let tickets = +prompt("Введіть кількість квитків від 1 до 6");
while (tickets < 1 || tickets > 6 || Number.isNaN(tickets))
{
    alert("Неправильна кількість квитків");
    tickets = +prompt("Введіть кількість квитків від 1 до 6");
}
let processedTickets = 0;
let freeTickets = 0;
let discountedTickets = 0;
let fullPriceTickets = 0;
let totalPrice = 0;
for (let i = 1; i <= tickets; i++)
{
    let age = +prompt("Введіть вік для квитка №" + i);
    if (age === -1)
    {
        break;
    }
    while (Number.isNaN(age) || age < 0 || age > 120)
    {
        alert("Неправильний вік");
        age = +prompt("Введіть вік для квитка №" + i);
    }
    processedTickets++;
    if (age >= 0 && age <= 5)
    {
        freeTickets++;
        continue;
    }
    let ticketPrice = basePrice;
    let hasDiscount = false;
    if (age >= 6 && age <= 12)
    {
        ticketPrice = ticketPrice * 0.5;
        hasDiscount = true;
    }
    else if (age >= 13 && age <= 17)
    {
        ticketPrice = ticketPrice * 0.8;
        hasDiscount = true;
    }
    else if (age >= 18 && age <= 59)
    {
        if (age >= 18 && age <= 25)
        {
            let student = +prompt(
                "Є студентський квиток?\n" +
                "1 - Так\n" +
                "2 - Ні"
            );

            while (student !== 1 && student !== 2)
            {
                alert("Неправильна відповідь");
                student = +prompt(
                    "Є студентський квиток?\n" +
                    "1 - Так\n" +
                    "2 - Ні"
                );
            }

            if (student === 1)
            {
                ticketPrice = ticketPrice * 0.9;
                hasDiscount = true;
            }
        }
    }
    else if (age >= 60)
    {
        ticketPrice = ticketPrice * 0.75;
        hasDiscount = true;
    }

    if (hasDiscount)
    {
        discountedTickets++;
    }
    else
    {
        fullPriceTickets++;
    }

    totalPrice = totalPrice + ticketPrice;
}

if (totalPrice > 1000)
{
    totalPrice = totalPrice * 0.95;
}

alert(`Оброблено квитків: ${processedTickets}\n
Безкоштовних квитків: ${freeTickets}\n
Квитків зі знижкою: ${discountedTickets}\n
Квитків за повною ціною: ${fullPriceTickets}\n
Загальна сума: ${totalPrice} грн.`);