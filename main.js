const defaultDiv = document.getElementById('default-div');
const form = document.getElementById('form');
let inputs = document.querySelectorAll('input');

//create variables for inputs and errors
inputs.forEach((element) => {
    window[element.id + 'Input'] = document.getElementById(element.id);
    window[element.id + 'Error'] = document.getElementById(
        element.id + '-error-message'
    );
});

//remove error when focusing
inputs.forEach((element) => {
    element.addEventListener('focus', () => {
        let error = element.parentNode.querySelector('span');
        error.textContent = '';
        element.classList.remove('valid');
        element.classList.remove('invalid');
    });
});

//EMAIL

//validate on leaving the box
emailInput.addEventListener('blur', () => {
    if (emailInput.validity.valid) {
        emailError.textContent = '';
        emailInput.classList.add('valid');
    } else {
        emailInput.classList.add('invalid');
        if (emailInput.validity.valueMissing) {
            emailError.textContent = 'Email required';
        } else if (emailInput.validity.typeMismatch) {
            emailError.textContent = 'Valid email required';
        } else {
            emailError.textContent = 'Error';
        }
    }
});

//COUNTRY

//validate on leaving the box
countryInput.addEventListener('blur', () => {
    if (countryInput.validity.valid) {
        countryError.textContent = '';
        countryInput.classList.add('valid');
    } else {
        countryInput.classList.add('invalid');
        if (countryInput.validity.valueMissing) {
            countryError.textContent = 'Country required';
        } else {
            countryError.textContent = 'Error';
        }
    }
});

//ZIP CODE

//validate on leaving the box
zipInput.addEventListener('blur', () => {
    if (zipInput.validity.valid) {
        zipError.textContent = '';
        zipInput.classList.add('valid');
    } else {
        zipInput.classList.add('invalid');
        if (zipInput.validity.valueMissing) {
            zipError.textContent = 'Zip Code required';
        } else if (zipInput == NaN) {
            zipError.textContent = 'not a number';
        } else {
            zipError.textContent = 'Error';
        }
    }
});

//PASSWORD

//validate on leaving the box
passwordInput.addEventListener('blur', () => {
    if (passwordInput.validity.valid) {
        passwordError.textContent = '';
        passwordInput.classList.add('valid');
    } else {
        passwordInput.classList.add('invalid');
        if (passwordInput.validity.valueMissing) {
            passwordError.textContent = 'Password required';
        } else {
            passwordError.textContent = 'Error';
        }
    }
});

// RE-PASSWORD

//validate on leaving the box
repasswordInput.addEventListener('blur', () => {
    if (repasswordInput.validity.valid) {
        repasswordError.textContent = '';
        repasswordInput.classList.add('valid');
    } else {
        repassword.classList.add('invalid');
        if (repasswordInput.validity.valueMissing) {
            repasswordError.textContent = 'Re-Enter password required';
        } else {
            repasswordError.textContent = 'Error';
        }
    }
});
