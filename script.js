const form = document.querySelector('#form');
const inputs = form.querySelectorAll('input');
const passwordInput = form.querySelector('#password');
const confirmPasswordInput = form.querySelector('#confirm-password');
const nameInput = form.querySelector('#name');
const surnameInput = form.querySelector('#surname');
const emailInput = form.querySelector('#email');
const birthdateInput = form.querySelector('#birthdate');

const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;


inputs.forEach(input => {
  input.addEventListener('blur', validateInput);
});

form.addEventListener('submit', validateForm);

function validateInput(event) {
  const input = event.target;
  if (!input.checkValidity()) {
    input.classList.add('error');
  } else {
    input.classList.remove('error');
  }
}

function validateForm(event) {
  event.preventDefault();
  let formValid = true;
  inputs.forEach(input => {
    if (!input.checkValidity()) {
      formValid = false;
      input.classList.add('error');
    }
  });
  if (formValid) {
    form.submit();
  }
}


// Vérification MDP


confirmPasswordInput.addEventListener('input', validatePassword);

form.addEventListener('submit', validateForm);

function validatePassword(event) {
  const password = passwordInput.value;
  const confirmPassword = event.target.value;

  if (password !== confirmPassword) {
    confirmPasswordInput.setCustomValidity('Les mots de passe ne correspondent pas');
  } else {
    confirmPasswordInput.setCustomValidity('');
  }
}





// Vérifications REGEX


form.addEventListener('submit', validateForm);

function validateForm(event) {
  event.preventDefault();

  if (!nameRegex.test(nameInput.value)) {
    nameInput.setCustomValidity('Champs invalide');
  } else {
    nameInput.setCustomValidity('');
  }
  if (!nameRegex.test(surnameInput.value)) {
    surnameInput.setCustomValidity('Champs invalide');
  } else {
    surnameInput.setCustomValidity('');
  }

  if (!emailRegex.test(emailInput.value)) {
    emailInput.setCustomValidity('Mail invalide');
  } else {
    emailInput.setCustomValidity('');
  }

  if (!passwordRegex.test(passwordInput.value)) {
    passwordInput.setCustomValidity('Mot de passe invalide');
  } else {
    passwordInput.setCustomValidity('');
  }

  if (!dateRegex.test(birthdateInput.value)) {
    birthdateInput.setCustomValidity('Date de naissance invalide');
  } else {
    birthdateInput.setCustomValidity('');
  }

  if (!form.checkValidity()) {
    form.classList.add('error');
  } else {
    form.classList.remove('error');
    form.submit();
  }
}