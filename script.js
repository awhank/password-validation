const input = document.querySelector('.password-input');
const error = document.querySelector('.error-message');
const timeout = null;

const showError = message => {
    error.style.color = '#c91e1e';
    error.style.display = 'block';
    error.innerHTML = message;
};

const showPass = message => {
    error.style.color = '#119822';
    error.innerHTML = message;
};

const validatePassword = password => {
    const lowerCaseRegex = new RegExp('^(?=.*[a-z])');
    const upperCaseRegex = new RegExp('^(?=.*[A-Z])');
    const specialCharacterRegex = new RegExp('^(?=.*[!@#$%^&*])');
    const numericRegex = new RegExp('^(?=.*[0-9])');

    if (password.length < 6) {
        showError('Your password must be at least 6 characters long');

    } else if (!lowerCaseRegex.test(password)) {
        showError('Harus berisi huruf kecil');

    } else if (!upperCaseRegex.test(password)) {
        showError('Harus berisi huruf kecil');

    } else if (!specialCharacterRegex.test(password)) {
        showError('Harus berisi spesial karakter');

    } else if (!numericRegex.test(password)) {
        showError('Harus berisi angka');

    } else {
        showPass('Strong Password');
    }
};

input.addEventListener('keyup', e => {
    const password = e.target.value;
    clearTimeout(timeout);
    timeout = setTimeout(() => validatePassword(password), 400);
});