// Get the form element
const form = document.getElementById('register');

// Get the input fields
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('psw');
const confirmPasswordInput = document.getElementById('confirmPassword');

// Function to validate the form
function validateForm(event) {
    event.preventDefault(); // Prevent the form from submitting by default

    // Get the values of input fields
    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    // Check if any field is empty
    if (username === '' || email === '' || password === '' || confirmPassword === '') {
        alert('Please fill in all fields');
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

 
    form.submit();
}

// Add event listener for form submission
form.addEventListener('submit', validateForm);
