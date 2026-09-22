// for(let i = 10, j = 1; i >= 1; i--, j++)
// {
//     console.log(`Число №${j} = ${i}`);
// }
//
// let sum = 0;
// for(let i = 1; i <= 100; i++)
// {
//     sum += i;
// }
// console.log(sum);
//
//
//
// for(let i = 0; i<=100; i++)
// {
//     if(i % 3 === 0 && i % 6 === 0 && i > 20)
//     {
//         console.log(i);
//         break;
//     }
// }

// for(let i = 1; i <= 100; i++)
// {
//     if(i % 5 === 0) continue;
//     console.log(i);
// }


// let studentsCount = +prompt("Введіть кількість учнів");
// while(studentsCount <= 0)
// {
//     studentsCount = +prompt("Неправильна кількість. Спробуйте ще раз");
// }
// let sum = 0, highLevel = 0, otherLevel = 0;
// let minGrade = 12, maxGrade = 1;
// for(let i = 1; i <= studentsCount; i++)
// {
//     let grade = +prompt(`Введіть оцінку учня №${i} з ${studentsCount} (від 1 до 12 б.)`);
//     while(grade > 12 || grade < 1)
//     {
//         grade = +prompt("Неправильна оцінка. Спробуйте ще раз");
//     }
//     sum += grade;
//     if(grade >= 10) highLevel++; else otherLevel++;
//     if(grade > maxGrade) maxGrade = grade;
//     if(grade < minGrade) minGrade = grade;
// }
// let avg = sum / studentsCount;
// alert(`Середній бал: ${avg}\n
// Сума оцінок: ${sum}\n
// Оцінок високого рівня: ${highLevel}\n
// Оцінок інших рівнів: ${otherLevel}\n
// Найменша оцінка: ${minGrade} б.\n
// Найбільша оцінка: ${maxGrade} б.`);

let studentsCount = +prompt("Введіть кількість учасників");
while(studentsCount <= 0)
{
    studentsCount = +prompt("Неправильна кількість. Спробуйте ще раз");
}

let sum = 0;
let highLevel = 0, middleLevel = 0, lowLevel = 0;
let minGrade = 100, maxGrade = 0;
let firstHundred = -1;

for(let i = 1; i <= studentsCount; i++)
{
    let grade = +prompt(`Введіть результат учасника №${i} з ${studentsCount} (від 0 до 100 б.)`);

    while(grade > 100 || grade < 0)
    {
        grade = +prompt("Неправильний результат. Спробуйте ще раз");
    }

    sum += grade;

    if(grade >= 90)
        highLevel++;
    else if(grade >= 60)
        middleLevel++;
    else
        lowLevel++;

    if(grade > maxGrade)
        maxGrade = grade;

    if(grade < minGrade)
        minGrade = grade;

    if(grade === 100 && firstHundred === -1)
        firstHundred = i;
}

let avg = sum / studentsCount;

let hundredText;
if(firstHundred === -1)
    hundredText = "Немає учасників зі 100 балами";
else
    hundredText = `Перший учасник зі 100 балами: №${firstHundred}`;

alert(`Середній результат: ${avg}\n
Результатів 90–100: ${highLevel}\n
Результатів 60–89: ${middleLevel}\n
Результатів нижче 60: ${lowLevel}\n
Найвищий результат: ${maxGrade} б.\n
Найнижчий результат: ${minGrade} б.\n
${hundredText}`);
