// let languages = ["Python", "JavaScript", "C++"];
// console.log(languages);
// console.log(languages[1]);
// console.log(languages.length);
// 
// for (let i = 0; i < languages.length; i++) {
//      console.log(languages[i]);
// }

// function getSum(array) {
//     let sum  = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum;
// }
//
// let numbers = [10, 15, 24, 46];
// console.log(getSum(numbers));

// let name = [];
// name.push("Roman");
// name.push("Roman2");
// name.pop();
// name.unshift("Roman3", "Roman4");
// name.shift();
// console.log(name.slice(0, 1));
//
// console.log(name);

// let colors = ["red", "green", "blue", "yellow", "brown", "cyan", "white"];
// // color = color.splice(0, 1, "pink");
// let deleted = colors.splice(4, 2);
// colors.splice(2, 0, 'pink');
// console.log(colors);

// function registerNames(name)
// {
//     if (name.trim() === "")
//     {
//         alert("Please enter a name");
//         return;
//     }
//     let duplication = false;
//     for (let i = 0; i < eventNames.length; i++)
//         if(eventNames[i] === name) duplication = true;
//     if (duplication) alert("Учасник вже зареєстрований");
//     else
//     {
//         eventNames.push(name);
//         alert(`Учасника ${name} зареєстровано`);
//     }
//
// }
// function removeNames(name) {
//     let index = -1;
//     for (let i = 0; i < eventNames.length; i++)
//     {
//         if(eventNames[i] === name)
//         {
//             index = i;
//             break;
//         }
//     }
//     if (index === -1) alert("Такого учасника немає");
//     else
//     {
//         eventNames.splice(index, 1);
//         alert(`Учасника ${name} видалено`);
//     }
// }
// function printCount()
// {
//     alert(`Всього учасників ${eventNames.length}`)
// }
//
// let eventNames = ["Ivan", "Olha", "Mariia", "Stepan", "Oleg"];
//
// registerNames("Viktor");
// removeNames("Ivan");
// printCount();

let eventNames = ["Ivan", "Olha", "Mariia", "Stepan", "Oleg"];

for (let i = 0; i < eventNames.length; i++)
    console.log(eventNames[i]);

for (let name of eventNames)
    console.log(name);

eventNames.forEach(function(name, index)
{
    console.log(index);
    console.log(name);
})





