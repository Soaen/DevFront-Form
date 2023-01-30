const form = document.querySelector('#form');
const inputs = form.querySelectorAll('input');

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