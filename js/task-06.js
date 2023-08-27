const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputIsCorrectLength);

function onInputIsCorrectLength(event) {
  const isValidLength = event.currentTarget.value.length === 6;
  inputEl.classList.remove("valid", "invalid");
  inputEl.classList.add(isValidLength ? "valid" : "invalid");
}