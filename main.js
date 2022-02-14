const defaultDiv = document.getElementById('default-div');

const form = document.getElementById('form');

//EMAIL
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error-message');

//validate on leaving the box
email.addEventListener('blur', () => {
    if (email.validity.valid) {
        emailError.textContent = '';
        email.classList.add('valid');
    } else {
        email.classList.add('invalid');
        if (email.validity.valueMissing) {
            emailError.textContent = 'Email required';
        } else if (email.validity.typeMismatch) {
            emailError.textContent = 'Valid email required';
        } else {
            emailError.textContent = 'Error';
        }
    }
});

//COUNTRY
const countryInput = document.getElementById('country');
const countryError = document.getElementById('country-error-message');

//validate on leaving the box
country.addEventListener('blur', () => {
    if (country.validity.valid) {
        countryError.textContent = '';
        country.classList.add('valid');
    } else {
        country.classList.add('invalid');
        if (country.validity.valueMissing) {
            countryError.textContent = 'Country required';
        } else {
            countryError.textContent = 'Error';
        }
    }
});

//ZIP CODE
const zipInput = document.getElementById('zip');
const zipError = document.getElementById('zip-error-message');

//validate on leaving the box
zip.addEventListener('blur', () => {
    if (zip.validity.valid) {
        zipError.textContent = '';
        zip.classList.add('valid');
    } else {
        zip.classList.add('invalid');
        if (zip.validity.valueMissing) {
            zipError.textContent = 'Zip Code required';
        } else {
            zipError.textContent = 'Error';
        }
    }
});

//PASSWORD
const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('password-error-message');

//validate on leaving the box
password.addEventListener('blur', () => {
    if (password.validity.valid) {
        passwordError.textContent = '';
        password.classList.add('valid');
    } else {
        password.classList.add('invalid');
        if (password.validity.valueMissing) {
            passwordError.textContent = 'Password required';
        } else {
            passwordError.textContent = 'Error';
        }
    }
});

//RE-PASSWORD
const repasswordInput = document.getElementById('repassword');
const repasswordError = document.getElementById('repassword-error-message');

//validate on leaving the box
repassword.addEventListener('blur', () => {
    if (repassword.validity.valid) {
        repasswordError.textContent = '';
        repassword.classList.add('valid');
    } else {
        repassword.classList.add('invalid');
        if (repassword.validity.valueMissing) {
            repasswordError.textContent = 'Re-Enter password required';
        } else {
            repasswordError.textContent = 'Error';
        }
    }
});

//
//
//
//
//remove error when focusing

//////(change to do to all fields later) /////

email.addEventListener('focus', () => {
    emailError.textContent = '';
    email.classList.remove('valid');
    email.classList.remove('invalid');
});
