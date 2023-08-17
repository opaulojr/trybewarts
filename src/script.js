const loginToggle = document.getElementById('login-toggle');
const registerToggle = document.getElementById('register-toggle');
const loginMenu = document.querySelector('.login-menu');
const registerMenu = document.querySelector('.register-menu');

const emailLoginInput = document.getElementById('email-login');
const passwordLoginInput = document.getElementById('password-login');
const loginBtn = document.getElementById('login-btn');

const nameRegisterInput = document.getElementById('name-register');
const emailInput = document.getElementById('email-register');
const passwordInput = document.getElementById('password-register');
const registerTermsCheckbox = document.getElementById('register-terms');
const registerButton = document.getElementById('register-btn');

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function updateLoginButtonState() {
  const emailValid = validateEmail(emailLoginInput.value);
  const passwordValid = passwordLoginInput.value.length >= 8;
  loginBtn.disabled = !(emailValid && passwordValid);
}

function updateRegisterButtonState() {
  const nameValid = nameRegisterInput.value.length >= 3;
  const emailValid = validateEmail(emailInput.value);
  const passwordValid = passwordInput.value.length >= 8;
  const termsAgreed = registerTermsCheckbox.checked;
  registerButton.disabled = !(nameValid && emailValid && passwordValid && termsAgreed);
}

loginToggle.addEventListener('click', () => {
  registerMenu.classList.remove('active');
  loginMenu.classList.toggle('active');
});

emailLoginInput.addEventListener('input', updateLoginButtonState);
passwordLoginInput.addEventListener('input', updateLoginButtonState);

registerToggle.addEventListener('click', () => {
  loginMenu.classList.remove('active');
  registerMenu.classList.toggle('active');
});

nameRegisterInput.addEventListener('input', updateRegisterButtonState);
emailInput.addEventListener('input', updateRegisterButtonState);
passwordInput.addEventListener('input', updateRegisterButtonState);
registerTermsCheckbox.addEventListener('change', updateRegisterButtonState);
