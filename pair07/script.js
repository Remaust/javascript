// function showMessage()
// {
//     console.log("Hello world");
// }
//
// showMessage();

// function showProduct(name, price = "немає в наявності")
// {
//     console.log(`товар ${name}: ${price} грн`);
// }
//
// showProduct("Laptop");

//
// function calculate(price, count)
// {
//     return price * count;
// }
//
// let total = calculate(1000, 4);
// console.log(total);

// function getProductTotal(price, count)
// {
//     return price * count;
// }
//
// function getDiscount(total)
// {
//     if(total >= 10000) return 0.15;
//     else if (total >= 5000) return 0.1;
//     else if (total >= 2000) return 0.05;
//     else return 0;
// }
// function getDiscountValue(total, percent)
// {
//     return total * percent;
// }
// function getFinalPrice(total, discount)
// {
//     return total - discount;
// }
//
// let productName = prompt("Enter the product name");
// let productPrice = +prompt("Enter the price");
// let productCount = +prompt("Enter the product count");
// let productTotal = getProductTotal(productPrice, productCount);
// let discount = getDiscount(productTotal);
// let productDiscountValue = getDiscountValue(productTotal, discount);
// let productFinalPrice = getFinalPrice(productTotal, productDiscountValue);
//
// alert(`Товар: ${productName}\n
//        Ціна: ${productPrice} грн\n
//        Кількість: ${productCount}\n
//        Сума: ${productTotal} грн\n
//        Знижка: ${discount}%\n
//        Сума знижки: ${productDiscountValue} грн\n
//        До сплати: ${productFinalPrice} грн`);


//_______________________________________________________________________________


//
// function calculateTripCost(distance, fuelConsumption, fuelPrice) {
//     let fuelNeeded = distance * fuelConsumption / 100;
//     return fuelNeeded * fuelPrice;
// }
// function pricePerKilometer(fuelPrice, fuelConsumption)
// {
//     return (fuelConsumption / 100) * fuelPrice;
// }
//
// let startCity = prompt("введіть місто-старт");
// let finishCity = prompt("введіть місто-фініш");
// let distance = +prompt("введіть відстань у км");
// let fuelConsumption = +prompt("введіть розхід пального (літрів на 100 км)");
// let fuelPrice = +prompt("введіть вартість 1 л пального");
//
// let cost = calculateTripCost(distance, fuelConsumption, fuelPrice);
// let perKm = pricePerKilometer(fuelPrice, fuelConsumption);
//
// alert(`поїздка ${startCity}-${finishCity} обійдеться в ${cost} грн (${perKm} грн за кілометр)`);


//_______________________________________________________________________________

let registeredLogin = "";
let registeredPassword = "";
let isRegistered = false;

function register() {
    registeredLogin = prompt("Введіть логін:");
    registeredPassword = prompt("Введіть пароль:");
    isRegistered = true;
    alert("Реєстрація успішна");
}

function login() {
    if (!isRegistered) {
        alert("Спочатку зареєструйся!");
        return;
    }

    let attempts = 3;
    while (attempts > 0) {
        let login = prompt("Введіть логін:");
        let password = prompt("Введіть пароль:");
        if (login === registeredLogin && password === registeredPassword) {
            alert("Вхід дозволено!");
            return;
        }
        attempts--;
        if (attempts > 0) alert(`Неправильний логін або пароль. Залишилося спроб: ${attempts}`);
        else alert("Вхід заблоковано");
    }
}

function menu() {
    let choice;
    do {
        choice = prompt("Меню:\n1. Зареєструватися\n2. Увійти в акаунт\n0. Вийти");
        switch (choice) {
            case "1":
                register();
                break;

            case "2":
                login();
                break;

            case "0":
                alert("Програму завершено");
                break;

            default:
                alert("Такого пункту меню не існує");
        }

    } while (choice !== "0");
}

menu();