const formName = document.getElementById("name");
const surName = document.getElementById("surname");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const textArea = document.getElementById("textarea");
const form = document.getElementById("form");
const nameError = document.getElementById("nameError");
const surnameError = document.getElementById("surnameError");
const phoneError = document.getElementById("phoneError");
const emailErrorr = document.getElementById("emailError");
const areaError = document.getElementById("areaError");

form.addEventListener("submit", (e) => {
  const emailCheck =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (formName.value === "" || formName.value === null) {
    e.preventDefault();
    nameError.style.color = "red";
    nameError.innerText = "Name is required! ";
  } else {
    nameError.style.color = "green";

    nameError.innerText = "Successfully fulfilled! ";
  }

  if (surName.value === "" || surName.value === null) {
    e.preventDefault();
    surnameError.style.color = "red";
    surnameError.innerText = "Surname is required! ";
  } else {
    surnameError.style.color = "green";

    surnameError.innerText = "Successfully fulfilled! ";
  }

  if (!email.value.match(emailCheck)) {
    e.preventDefault();
    emailErrorr.style.color = "red";
    emailErrorr.innerText = "Valid e-mail is required! ";
  } else {
    emailErrorr.style.color = "green";

    emailErrorr.innerText = "Successfully fulfilled! ";
  }
  if (textArea.value === "" || textArea.value === null) {
    e.preventDefault();
    areaError.style.color = "red";
    areaError.innerText = "Message is required ! ";
  } else {
    areaError.style.color = "green";

    areaError.innerText = "Successfully fulfilled! ";
  }

  if (phone.value.length > 11 || phone.value.length < 11) {
    e.preventDefault();
    phoneError.style.color = "red";
    phoneError.innerText =
      "Phone number is required and must be at least 11 digits!  ";
  } else {
    phoneError.style.color = "green";

    phoneError.innerText = "Successfully fulfilled! ";
  }
});
