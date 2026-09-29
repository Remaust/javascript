// let i = 1;
// while(i <= 5)
// {
//     console.log(i);
//     i++;
// }

// console.log(Number("Hello"));


// let age = +prompt("Enter your age");
// while (Number.isNaN(age) || age <= 0 || age >= 120)
// {
//     alert("Please enter your age");
//     age = +prompt("Enter your age");
// }
// console.log(age);

// const correctPin = 1111;
// //
// // let pin = +prompt("enter a valid pin");
// let tries = 1;
// // while(pin !== correctPin && tries <= 3)
// // {
// //     pin = +prompt("enter a valid pin");
// //     tries++;
// // }
// // if(pin === correctPin)
// // {
// //     alert("access granted");
// // }
// // else
// // {
// //     alert("access denied");
// // }
//
// while(tries <= 3)
// {
//     let pin = +prompt('Enter a valid pin');
//     if(pin === correctPin)
//     {
//         alert("access granted");
//         break;
//     }
//     tries++;
//     alert("wrong pin");
// }

// let menuChoice;
// do {
//     menuChoice = +prompt("Оберіть дію:\n" +
//         "1 - Відкрити профіль\n" +
//         "2 - Налаштування профілю\n" +
//         "0 - Вихід");
//     if (menuChoice === 1) {
//         console.log("Відкриваємо профіль");
//     }
//     else if (menuChoice === 2) {
//         console.log("Налаштовуємо профіль");
//     }
//     else if (menuChoice === 0) {
//         console.log("Вихід");
//     }
//     else {
//         console.log("Невідома команда");
//     }
// } while (menuChoice !== 0);

//
// let menuChoice;
// do {
//     menuChoice = +prompt("Оберіть дію:\n" +
//         "1 - Відкрити профіль\n" +
//         "2 - Налаштування профілю\n" +
//         "3 - Відправити повідомлення\n" +
//         "4 - Переглянути інформацію\n" +
//         "5 - Видалити акаунт\n" +
//         "0 - Вихід");
//     switch(menuChoice) {
//         case 1:
//             console.log("Відкриваємо профіль");
//             break;
//         case 2:
//             console.log("Налаштовуємо профіль");
//             break;
//         case 3:
//             console.log("Відправляємо повідомлення");
//             break;
//         case 4:
//             console.log("Переглядаємо інформацію");
//             break;
//         case 5:
//             console.log("Видаляємо акаунт");
//             break;
//         default:
//             console.log("Невідомий вибір");
//     }
// } while (menuChoice !== 0);


// let gradeSum = 0;
// let count = 0;
//
// while (count < 5) {
//     let num;
//
//     num = +prompt("Enter the grade");
//
//     if (Number.isNaN(num) || num <= 0 || num > 12) {
//         alert("Invalid grade");
//         continue;
//     }
//
//     gradeSum += num;
//     count++;
// }
//
// alert(`Average grade is ${gradeSum / 5}`);

//_______________________________________________________________________________________


let age = +prompt("Введіть свій вік");

while (Number.isNaN(age) || age < 12 || age > 90)
{
    alert("Некоректний вік");
    age = +prompt("Введіть свій вік");
}

const correctPin = 4321;
let tries = 1;
let access = false;

while (tries <= 3)
{
    let pin = +prompt("Введіть PIN");

    if (pin === correctPin)
    {
        alert("Доступ дозволено");
        access = true;
        break;
    }
    else
    {
        alert("Неправильний PIN");
    }

    tries++;
}

if (access)
{
    let menuChoice;

    do
    {
        menuChoice = +prompt(
            "Оберіть дію:\n" +
            "1 - Особистий кабінет\n" +
            "2 - Повідомлення\n" +
            "3 - Налаштування\n" +
            "0 - Вихід"
        );

        switch (menuChoice)
        {
            case 1:
                console.log("Відкриваємо особистий кабінет");
                break;

            case 2:
                console.log("Відкриваємо повідомлення");
                break;

            case 3:
                console.log("Відкриваємо налаштування");
                break;

            case 0:
                console.log("Вихід");
                break;

            default:
                alert("Такого пункту немає.");
        }
    }
    while (menuChoice !== 0);
}
else
{
    alert("Доступ заборонено");
}