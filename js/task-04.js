let counterValue = 0;
const counterEl = document.querySelector('#value');
const decremButtonEl = document.querySelector('[data-action="decrement"]');
const incremButtonEl = document.querySelector('[data-action="increment"]');

decremButtonEl.addEventListener('click', onDecrementButtonClick);
incremButtonEl.addEventListener('click', onIncrementButtonClick);

function onDecrementButtonClick() {
  counterValue -= 1;
  counterEl.textContent = counterValue;
};

function onIncrementButtonClick() {
  counterValue += 1;
  counterEl.textContent = counterValue;
};