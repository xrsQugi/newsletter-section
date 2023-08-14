const form = document.querySelector("#form");
const username = document.querySelector("#name");
const email = document.querySelector("#email");
const checkbox = document.querySelector("#formAgreement");
const errorIconName = document.querySelector('.error-icon-name');
const errorIconEmail = document.querySelector('.error-icon-email');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs(e);
});

const setError = (element, icon) => {
  element.classList.add("error");
  icon.style.display = "block";
};

const setSuccess = (element, icon) => {
  element.classList.remove("error");
  icon.style.display = "none";
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = (e) => {
  const nameValue = username.value.trim();
  const emailValue = email.value.trim();

  function nameValidate(username, icon) {
    if (nameValue === "") {
      setError(username, icon);
      return false;
    } else {
      setSuccess(username, icon);
      return true;
    }
  }

  function emailValidate(email, icon) {
    if (emailValue === "") {
      setError(email, icon);
      return false;
    } else if (!isValidEmail(emailValue)) {
      setError(email, icon);
      return false;
    } else {
      setSuccess(email, icon);
      return true;
    }
  }

  nameValidate(username, errorIconName);
  emailValidate(email, errorIconEmail);
  if (!checkbox.checked) {
    return alert("Agree with terms of the newsletter");
  }

  if (nameValidate(username, errorIconName) && emailValidate(email, errorIconEmail) && checkbox.checked) {
    console.log(`
        Name: ${username.value}, 
        Email: ${email.value}, 
        Agreement: ${checkbox.checked}, 
    `);
    e.currentTarget.reset();
  }
};