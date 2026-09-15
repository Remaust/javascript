// // 1
// let age = +prompt("How old are you?");
// if(age <= 12)
// {
//     alert("Child");
// }
// else if(age < 18)
// {
//     alert("Teenager");
// }
// else
// {
//     alert("Adult");
// }

// // 2
// const login = "admin";
// const password = "12345";
//
// let enteredLogin = prompt("Enter your login:");
// let enteredPassword = prompt("Enter your password:");
//
// if(enteredLogin === login && enteredPassword === password)
// {
//     alert(`Welcome, ${enteredLogin}`);
// }
// else
// {
//     alert("Wrong login or password");
// }

// //3
// let dayNum = +prompt("Enter day number:");
// if (dayNum > 0 && dayNum <= 7)
// {
//     switch(dayNum) {
//         case 1:
//             alert("Monday");
//             break;
//         case 2:
//             alert("Tuesday");
//             break;
//         case 3:
//             alert("Wednesday");
//             break;
//         case 4:
//             alert("Thursday");
//             break;
//         case 5:
//             alert("Friday");
//             break;
//         case 6:
//             alert("Saturday");
//             break;
//         case 7:
//             alert("Sunday");
//             break;
//     }
// }
// else
// {
//     alert("Wrong day number");
// }

//________________________________________________

// 4
let productName = prompt("Enter product name");
let productPrice = +prompt("Enter product price");
let productCount = +prompt("Enter product count");
let discountCard = confirm("Do you have a discount card?");
let deliveryType = prompt("Enter product delivery type (courier/mail/pickup)");
let totalPrice = productPrice * productCount;
let totalDiscount = 0;
if(totalPrice >= 10000)
{
    totalDiscount = 0.15;
}
else if(totalPrice >= 5000)
{
    totalDiscount = 0.1;
}
else if(totalPrice >= 2000)
{
    totalDiscount = 0.05;
}
if(discountCard)
{
    if(totalPrice >= 10000)
    {
        totalDiscount += 0.15;
    }
    else if(totalPrice >= 5000)
    {
        totalDiscount += 0.12;
    }
    else if(totalPrice >= 2000)
    {
        totalDiscount += 0.1;
    }
    else
    {
        totalDiscount += 0.05;
    }
}
totalPrice = totalPrice - (totalDiscount * totalPrice);
switch(deliveryType)
{
    case "courier":
        totalPrice += 200;
        break;
    case "mail":
        totalPrice += 100;
        break;
}

alert(`Your total is ${totalPrice}!`);


