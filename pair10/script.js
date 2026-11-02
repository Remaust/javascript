// let student = {
//     name: "John Doe",
//     role: "student",
// };
// console.log(student.name);
// console.log(document.title);
//
// let heading = document.getElementsByTagName("h1");
// let headingId = document.getElementById("profile-name");
// let skills = document.getElementsByClassName("skill");
//
// let skills2 = document.querySelector(".skills");
// let skills = document.querySelectorAll(".skills");
//
// for (let skill of skills)
// {
//     console.log(skill);
// }

let student = {
  name: 'Maistrenko Roman',
  role: 'Lyceum student',
  city: 'Kyiv',
  portfolio: 'https://github.com'
};

let nameElement = document.querySelector("#profile-name");
let roleElement = document.querySelector(".profile-role");
let cityElement = document.querySelector(".profile-city");
let portfolioElement = document.querySelector("#profile-link");
nameElement.textContent = student.name;
roleElement.textContent = student.role;
cityElement.textContent = student.city;
portfolioElement.textContent = student.portfolio;

roleElement.innerHTML = '<strong>' + student.role + '</strong>';

portfolioElement.setAttribute('href', student.portfolio);

let skillsElement = document.querySelectorAll(".skills");

let skillsArray = ['HTML', 'CSS', 'JavaScript'];
// skillsElement[0].textContent = 'HTML';
// skillsElement[1].textContent = 'CSS';
// skillsElement[2].textContent = 'JS';

for (let i = 0; i < skillsArray.length; i++) {
    skillsElement[i].textContent = skillsArray[i];
}
