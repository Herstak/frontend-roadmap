const title = document.querySelector("h1");

title.textContent = "Привет, я теперь управляю DOM!";

const cardTitles = document.querySelectorAll(".card__title");
cardTitles.forEach(el => el.textContent += "✨");

cardTitles[1].classList.add("card--highlighted");

const cardTexts = document.querySelectorAll(".card__text");
const cardText = [...cardTexts].map(el => el.textContent);

console.log(cardText);

const cards = document.querySelectorAll(".card");
cards.forEach((card) => console.log(card.dataset.cardId));

document.body.classList.add("dark-mode");