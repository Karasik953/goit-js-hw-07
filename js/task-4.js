const formSubmit = document.querySelector(".login-form");

formSubmit.addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
    return;
  }

  const data = {
    email,
    password,
  };

  console.log(data);
  form.reset();
});
