// let book = {
//     title: "Кобзар",
//     author: "Тарас Шевченко",
//     price: 500,
//     available: true
// }
// console.log(book.title);
// console.log(book["author"]);
// book.price = 550;
// console.log(book.price);
//
// for (let key in book)
// {
//     console.log(`${key}: ${book[key]}`);
// }

let books = [
    {id: 1, title: "Кобзар", author: "Тарас Шевченко", price: 500, available: true},
    {id: 2, title: "Лісова пісня", author: "Леся Українка", price: 600, available: false},
    {id: 3, title: "Тигролови", author: "Іван Багряний", price: 450, available: true},
    {id: 4, title: "Енеїда", author: "Іван Котляревський", price: 500, available: false},
]

// console.log(books);

books.push({id: 5, title: "Захар Беркут", author: "Іван Франко", price: 600, available: false});

// console.log(books);
// for (let book of books)
// {
//     console.log(`${book.title} - ${book.author}`);
// }
// books.forEach(function(book)
// {
//     console.log(`${book.title} - ${book.author}`);
// })

// let total = books.filter(function(book){
//     return book.available === true;
// })

// let total = books.filter(book => book.available === true);
//
// console.log(total);
//
// let foundBooks = books.filter(book => book.id === 3);
// console.log(foundBooks);
//
// let bookSearchQuery = prompt("Введіть назву книги");
// let searchBook = books.find(book => book.title === bookSearchQuery);
// if (searchBook !== undefined) alert(searchBook); else alert("Такої книги немає");

// let titles = books.map(book => book.title);
// console.log(titles);
//
// let booksSales = books.map(book =>
// {
//     return {
//         id: book.id,
//         title: book.title,
//         author: book.author,
//         price: Math.round(book.price * 0.9),
//         available: book.available
//     }
// });
//
// console.log(booksSales);

let sortedByPrice = books.slice().sort((a, b) => a.price - b.price);
console.log(sortedByPrice);