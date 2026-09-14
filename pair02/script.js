// if(умова)
// {
//     дії;
// }
// else if()
// {
//
// }
// false: 0, 0n, "", '', null, undefined, NaN


// let a = 10, b = 12;
// console.log(a == b); - нестрога рівність
// console.log(a === b); - строга рівність
// console.log(a != b);
// console.log(a !== b);


// let a = +prompt("Введи число: ");
// let b = +prompt("Введи число: ");
// let c;
// if (a > b)
// {
//     c = 'a > b';
// }
// else if (a < b)
// {
//     c = 'a < b';
// }
// else
// {
//     c = "a = b";
// }
// alert(c);
// if (a > b) c = 'a > b';
// else if (a < b) c = 'a < b';
// else c = 'a = b';
// alert(c);

// let course = prompt("What is the name of course?"), title;
// switch(course)
// {
//     case 'figma':
//         title = 'Figma';
//         break;
//
//     case 'web':
//         title = 'Web';
//         break;
//
//     case 'javascript':
//         title = 'Javascript';
//         break;
// }
// alert(title);

//______________________________________________________________


// let product = prompt("Який товар ви хочете купити?");
// let price = +prompt("Введіть вартість товару");
// let quantity = +prompt("Введіть кількість товару");
//
// let total = price * quantity;
//
// if (total > 5000) {
//     total = total * 0.9;
//     alert(`Товар: ${product}\nСума зі знижкою 10%: ${total} грн`);
// }
// else {
//     alert(`Товар: ${product}\nСума покупки: ${total} грн`);
// }
//
// let delivery = prompt("Введіть тип доставки: кур'єр, пошта або самовивіз");
//
// switch (delivery) {
//     case "кур'єр":
//         alert("Вартість доставки: 200 грн");
//         break;
//
//     case "пошта":
//         alert("Вартість доставки: 100 грн");
//         break;
//
//     case "самовивіз":
//         alert("Доставка безкоштовна");
//         break;
//
//     default:
//         alert("Тип доставки не знайдено");
// }

//__________________________________________________________________________

let a = true;
console.log(!a);

let a = 10, b = 12, c = 5;

if (a > b && a > c) {
    console.log(a);
} else if (b > a || a > c) {}
