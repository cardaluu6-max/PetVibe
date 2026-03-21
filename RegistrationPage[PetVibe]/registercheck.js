// ===== PetVibes Registration Validator =====

document.getElementById('registerButton').addEventListener('click', validateForm);

function validateForm() {
    let isValid = true;

    const fullName        = document.getElementById('fullNameInput');
    const email           = document.getElementById('emailInput');
    const username        = document.getElementById('usernameInput');
    const password        = document.getElementById('passwordInput');
    const confirmPassword = document.getElementById('confirmPasswordInput');

    const fullNameWarning        = document.getElementById('fullNameWarning');
    const emailWarning           = document.getElementById('emailWarning');
    const usernameWarning        = document.getElementById('usernameWarning');
    const passwordWarning        = document.getElementById('passwordWarning');
    const confirmPasswordWarning = document.getElementById('confirmPasswordWarning');

    // Clear all warnings
    clearWarnings([fullNameWarning, emailWarning, usernameWarning, passwordWarning, confirmPasswordWarning]);

    // --- Full Name ---
    if (fullName.value.trim() === '') {
        showWarning(fullName, fullNameWarning, 'Full name is required.');
        isValid = false;
    } else if (fullName.value.trim().length < 2) {
        showWarning(fullName, fullNameWarning, 'Please enter your full name.');
        isValid = false;
    }

    // --- Email ---
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '') {
        showWarning(email, emailWarning, 'Email address is required.');
        isValid = false;
    } else if (!emailRegex.test(email.value.trim())) {
        showWarning(email, emailWarning, 'Please enter a valid email address.');
        isValid = false;
    }

    // --- Username ---
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    if (username.value.trim() === '') {
        showWarning(username, usernameWarning, 'Username is required.');
        isValid = false;
    } else if (!usernameRegex.test(username.value.trim())) {
        showWarning(username, usernameWarning, 'Username must be 3–20 characters (letters, numbers, _).');
        isValid = false;
    }

    // --- Password ---
    if (password.value === '') {
        showWarning(password, passwordWarning, 'Password is required.');
        isValid = false;
    } else if (password.value.length < 8) {
        showWarning(password, passwordWarning, 'Password must be at least 8 characters.');
        isValid = false;
    }

    // --- Confirm Password ---
    if (confirmPassword.value === '') {
        showWarning(confirmPassword, confirmPasswordWarning, 'Please confirm your password.');
        isValid = false;
    } else if (confirmPassword.value !== password.value) {
        showWarning(confirmPassword, confirmPasswordWarning, 'Passwords do not match.');
        isValid = false;
    }

    if (isValid) {
        // TODO: Submit form / call API here
        alert('Account created successfully! Welcome to PetVibes 🐾');
    }
}

function showWarning(input, warningEl, message) {
    warningEl.textContent = message;
    input.style.borderColor = 'red';
}

function clearWarnings(warnings) {
    warnings.forEach(w => w.textContent = '');
    document.querySelectorAll('.inputContainer input').forEach(input => {
        input.style.borderColor = '#F2795E';
    });
}