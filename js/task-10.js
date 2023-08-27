function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


let amount = 0;
let boxWidth = 20;
let boxHeight = 20;

const inputEl = document.querySelector("input");
const buttonCreateEl = document.querySelector("[data-create]");
const buttonDestroyEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

inputEl.addEventListener("blur", onInputGetAmount);
buttonCreateEl.addEventListener("click", onBoxesCreateBox);
buttonDestroyEl.addEventListener("click", onBoxesDestroyAll);

function onInputGetAmount(event) {
  amount = +event.currentTarget.value;
};

function onBoxesCreateBox() {
  for (let i = 1; i <= amount; i += 1) {
  const boxString = `<div style="width: ${boxWidth += 10}px; height: ${boxHeight += 10}px; background-color: ${getRandomHexColor()};"></div>`;
  boxesEl.insertAdjacentHTML("beforeend", boxString);
  }
}

function onBoxesDestroyAll() {
  boxesEl.innerHTML = '';
  boxWidth = 20;
  boxHeight = 20;
}
