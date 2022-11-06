const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector("#ingredients");
console.log(ulEl);
const liEl = document.createElement("li.item");
liEl.innerHTML = ingredients.reduce(
  (str, item) => str + `<li>${item}</li>`,
  ""
);
ulEl.after(liEl);
const title = document.createElement("h2");
title.textContent = "Ingredients";
ulEl.before(title);
