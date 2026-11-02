// // let book = {
// //     title: "Кобзар",
// //     author: "Тарас Шевченко",
// //     price: 500,
// //     available: true
// // }
// // console.log(book.title);
// // console.log(book["author"]);
// // book.price = 550;
// // console.log(book.price);
// //
// // for (let key in book)
// // {
// //     console.log(`${key}: ${book[key]}`);
// // }
//
// let books = [
//     {id: 1, title: "Кобзар", author: "Тарас Шевченко", price: 500, available: true},
//     {id: 2, title: "Лісова пісня", author: "Леся Українка", price: 600, available: false},
//     {id: 3, title: "Тигролови", author: "Іван Багряний", price: 450, available: true},
//     {id: 4, title: "Енеїда", author: "Іван Котляревський", price: 500, available: false},
// ]
//
// // console.log(books);
//
// books.push({id: 5, title: "Захар Беркут", author: "Іван Франко", price: 600, available: false});
//
// // console.log(books);
// // for (let book of books)
// // {
// //     console.log(`${book.title} - ${book.author}`);
// // }
// // books.forEach(function(book)
// // {
// //     console.log(`${book.title} - ${book.author}`);
// // })
//
// // let total = books.filter(function(book){
// //     return book.available === true;
// // })
//
// // let total = books.filter(book => book.available === true);
// //
// // console.log(total);
// //
// // let foundBooks = books.filter(book => book.id === 3);
// // console.log(foundBooks);
// //
// // let bookSearchQuery = prompt("Введіть назву книги");
// // let searchBook = books.find(book => book.title === bookSearchQuery);
// // if (searchBook !== undefined) alert(searchBook); else alert("Такої книги немає");
//
// // let titles = books.map(book => book.title);
// // console.log(titles);
// //
// // let booksSales = books.map(book =>
// // {
// //     return {
// //         id: book.id,
// //         title: book.title,
// //         author: book.author,
// //         price: Math.round(book.price * 0.9),
// //         available: book.available
// //     }
// // });
// //
// // console.log(booksSales);
//
// let sortedByPrice = books.slice().sort((a, b) => a.price - b.price);
// console.log(sortedByPrice);


//-------------------------------------------------------------------------------------------

let games = [
    { id: 1, title: "The Witcher 3", genre: "RPG", price: 300, rating: 10, available: true },
    { id: 2, title: "Minecraft", genre: "Пісочниця", price: 650, rating: 9, available: true },
    { id: 3, title: "FIFA 24", genre: "Спорт", price: 1200, rating: 7, available: false },
    { id: 4, title: "Cyberpunk 2077", genre: "RPG", price: 900, rating: 8, available: true },
    { id: 5, title: "Stardew Valley", genre: "Симулятор", price: 150, rating: 9, available: true },
    { id: 6, title: "Call of Duty", genre: "Шутер", price: 1500, rating: 6, available: false }
];

console.log("1. Усі ігри:");
for (let game of games)
{
    console.log(`${game.title} - ${game.genre} - ${game.price} грн - рейтинг ${game.rating}`);
}

console.log(`2. Кількість ігор: ${games.length}`);

let newTitle = prompt("Введіть назву нової гри:");
let newGenre = prompt("Введіть жанр гри:");
let newPrice = +prompt("Введіть ціну гри:");
let newRating = +prompt("Введіть рейтинг гри (1-10):");

if (newTitle && !isNaN(newPrice) && !isNaN(newRating) && newRating >= 1 && newRating <= 10)
{
    games.push({
        id: games.length + 1,
        title: newTitle,
        genre: newGenre,
        price: newPrice,
        rating: newRating,
        available: true
    });
    console.log(`3. Гру "${newTitle}" додано. Тепер ігор: ${games.length}`);
}
else
{
    console.log("3. Неправильні дані, гру не додано");
}

let lastGame = games[games.length - 1];

if (confirm(`Видалити гру "${lastGame.title}"?`))
{
    games.pop();
    console.log(`4. Гру "${lastGame.title}" видалено. Залишилось ігор: ${games.length}`);
}
else
{
    console.log("4. скасовано.");
}

let searchTitle = prompt("Введіть назву гри для пошуку:");
let foundGame = games.find(game => game.title === searchTitle);
if (foundGame)
{
    console.log(`5. Знайдено: ${foundGame.title}, ціна ${foundGame.price} грн`);
}
else
{
    console.log(`5. Гру "${searchTitle}" не знайдено.`);
}

let maxPrice = +prompt("Введіть максимальну ціну:");
let cheapGames = games.filter(game => game.price <= maxPrice);

console.log(`6. Ігри до ${maxPrice} грн:`);
if (cheapGames.length > 0)
{
    for (let game of cheapGames)
    {
        console.log(`${game.title} - ${game.price} грн`);
    }
}
else
{
    console.log("таких ігор немає");
}

let topGames = games.filter(game => game.rating >= 8);

console.log("7. Ігри з рейтингом від 8:");
for (let game of topGames)
{
    console.log(`${game.title} - рейтинг ${game.rating}`);
}

let titles = games.map(game => game.title);
console.log("8. Назви ігор:", titles);

let saleGames = games.map(function (game)
{
    return {
        id: game.id,
        title: game.title,
        genre: game.genre,
        price: game.price * 0.85,
        rating: game.rating,
        available: game.available
    };
});

console.log("9. Ігри зі знижкою 15%:");
for (let game of saleGames)
{
    console.log(`${game.title} - ${game.price} грн`);
}

games.sort((a, b) => a.price - b.price);

console.log("10. Ігри за ціною:");
for (let game of games)
{
    console.log(`${game.title} - ${game.price} грн`);
}

let myName = "Роман";
let nameLength = myName.length;
console.log(`Ім'я: ${myName}, символів: ${nameLength}`);
let budget = nameLength * 100;
console.log(`Бюджет: ${budget} грн`);
let availableGames = games.filter(game => game.available === true);
let total = 0;

console.log("Доступні ігри:");
for (let game of availableGames)
{
    console.log(`${game.title} - ${game.price} грн`);
    total = total + game.price;
}
console.log(`Загальна вартість: ${total} грн`);

if (total > budget)
{
    alert(`Грошей не вистачає, потрібно ще ${total - budget} грн.`);
}
else
{
    alert(`Грошей вистачає, залишок: ${budget - total} грн.`);
}
