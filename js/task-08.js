const formEl = document.querySelector(".login-form");
const errorMessage = "Please fill in all input fields!";

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  
  const mail = formElements.email.value;
  const password = formElements.password.value;

  if (!mail || !password) {
    return alert(errorMessage)
  };

  const formData = {
    mail,
    password
  };

  console.log(formData);
  
  formEl.reset();
}