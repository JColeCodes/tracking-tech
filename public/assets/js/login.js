const registerForm = document.querySelector('.register-form');
const loginForm = document.querySelector('.login-form');
const errorMessage = document.querySelector('.error-message');

async function register(event) {
    event.preventDefault();

    const username = document.querySelector('#username-register').value.trim();
    const email = document.querySelector('#email-register').value.trim();
    const password = document.querySelector('#password-register').value.trim();

    if(username && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (!response.ok) {
            errorMessage.textContent = 'There has been an error in registering. Please make sure your email is valid and your password is 5 or more characters in length.';
        } else {
            errorMessage.textContent = '';
            document.location.replace('/dashboard');
        }
    }
}

async function login(event) {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if(email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (!response.ok) {
            errorMessage.textContent = 'There has been an error in logging in. Please make sure your email and password are correct.';
        } else {
            errorMessage.textContent = '';
            document.location.replace('/dashboard');
        }
    }
}

async function toggleForm(event) {
    event.preventDefault();

    if (registerForm.classList.contains('hidden')) {
        registerForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    } else if (loginForm.classList.contains('hidden')) {
        registerForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    }
    errorMessage.textContent = '';
}

registerForm.addEventListener('submit', register);
loginForm.addEventListener('submit', login);

document.querySelector('#toLogin').addEventListener('click', toggleForm);
document.querySelector('#toRegister').addEventListener('click', toggleForm);