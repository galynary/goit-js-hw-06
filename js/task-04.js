const button = {
  sub: document.querySelector("[data-action='increment']"),
  add: document.querySelector("[data-action='decrement']"),
  span: document.querySelector("#value"),
};

let counterValue = 0;
const increment = () => {
  counterValue += 1;

  button.span.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  button.span.textContent = counterValue;
};

button.sub.addEventListener("click", increment);
button.add.addEventListener("click", decrement);
button.sub.setAttribute(
  "style",
  "list-style-type:none; background-color: #A5DE77;border-radius:4px;"
);
button.add.setAttribute(
  "style",
  "list-style-type:none; background-color: #FAFD7C;border-radius:4px;"
);
let countar = document.querySelector("#counter");
countar.setAttribute(
  "style",
  "list-style-type:none; display: flex;gap:10px; justify-content:center; padding-top:70px;"
);
